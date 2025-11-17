"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrashIcon,
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  MessageSquareIcon,
} from "lucide-react";
import { toast } from "sonner";
import {
  updateContactFormStatus,
  deleteContactForm,
} from "@/actions/contactForm";
import { ContactFormStatus } from "@prisma/client";

interface ContactForm {
  id: string;
  email: string;
  name: string;
  mobile: string;
  message: string;
  status: ContactFormStatus;
  adminNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ContactClientProps {
  initialForms: ContactForm[];
}

const statusColors = {
  PENDING: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  IN_PROGRESS: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  RESOLVED: "bg-green-500/10 text-green-700 dark:text-green-400",
  CLOSED: "bg-gray-500/10 text-gray-700 dark:text-gray-400",
};

const statusLabels = {
  PENDING: "Pending",
  IN_PROGRESS: "In Progress",
  RESOLVED: "Resolved",
  CLOSED: "Closed",
};

export default function ContactClient({ initialForms }: ContactClientProps) {
  const [forms, setForms] = useState<ContactForm[]>(initialForms);
  const [selectedForm, setSelectedForm] = useState<ContactForm | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredForms =
    activeTab === "all"
      ? forms
      : forms.filter((form) => form.status === activeTab);

  const handleStatusChange = async (
    id: string,
    newStatus: ContactFormStatus
  ) => {
    const result = await updateContactFormStatus(
      id,
      newStatus,
      selectedForm?.id === id ? adminNotes : undefined
    );

    if (result.success && result.data) {
      setForms(forms.map((f) => (f.id === id ? result.data! : f)));
      if (selectedForm?.id === id) {
        setSelectedForm(result.data);
      }
      toast.success("Status updated successfully");
    } else {
      toast.error(result.error || "Failed to update status");
    }
  };

  const handleSaveNotes = async (id: string, status: ContactFormStatus) => {
    const result = await updateContactFormStatus(id, status, adminNotes);

    if (result.success && result.data) {
      setForms(forms.map((f) => (f.id === id ? result.data! : f)));
      setSelectedForm(result.data);
      toast.success("Notes saved successfully");
    } else {
      toast.error(result.error || "Failed to save notes");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    const result = await deleteContactForm(id);

    if (result.success) {
      setForms(forms.filter((f) => f.id !== id));
      if (selectedForm?.id === id) {
        setSelectedForm(null);
      }
      toast.success("Contact form deleted successfully");
    } else {
      toast.error(result.error || "Failed to delete contact form");
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusCount = (status: string) => {
    if (status === "all") return forms.length;
    return forms.filter((f) => f.status === status).length;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Forms</h1>
        <p className="text-muted-foreground">
          Manage and respond to contact form submissions
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({getStatusCount("all")})</TabsTrigger>
          <TabsTrigger value="PENDING">
            Pending ({getStatusCount("PENDING")})
          </TabsTrigger>
          <TabsTrigger value="IN_PROGRESS">
            In Progress ({getStatusCount("IN_PROGRESS")})
          </TabsTrigger>
          <TabsTrigger value="RESOLVED">
            Resolved ({getStatusCount("RESOLVED")})
          </TabsTrigger>
          <TabsTrigger value="CLOSED">
            Closed ({getStatusCount("CLOSED")})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredForms.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  No contact forms found for this filter.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* List View */}
              <div className="space-y-4">
                {filteredForms.map((form) => (
                  <Card
                    key={form.id}
                    className={`cursor-pointer transition-all ${
                      selectedForm?.id === form.id
                        ? "ring-2 ring-primary"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => {
                      setSelectedForm(form);
                      setAdminNotes(form.adminNotes || "");
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold">{form.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MailIcon className="h-3 w-3" />
                            {form.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <PhoneIcon className="h-3 w-3" />
                            {form.mobile}
                          </div>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            statusColors[form.status]
                          }`}
                        >
                          {statusLabels[form.status]}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {form.message}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        {formatDate(form.createdAt)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Detail View */}
              <div className="lg:sticky lg:top-6 lg:h-fit">
                {selectedForm ? (
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle>Contact Details</CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(selectedForm.id)}
                        >
                          <TrashIcon className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Name
                        </label>
                        <p className="text-base">{selectedForm.name}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Email
                        </label>
                        <p className="text-base">
                          <a
                            href={`mailto:${selectedForm.email}`}
                            className="text-primary hover:underline"
                          >
                            {selectedForm.email}
                          </a>
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Mobile
                        </label>
                        <p className="text-base">
                          <a
                            href={`tel:${selectedForm.mobile}`}
                            className="text-primary hover:underline"
                          >
                            {selectedForm.mobile}
                          </a>
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Message
                        </label>
                        <div className="mt-1 p-3 bg-muted rounded-md">
                          <p className="text-sm whitespace-pre-wrap">
                            {selectedForm.message}
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Status
                        </label>
                        <select
                          value={selectedForm.status}
                          onChange={(e) =>
                            handleStatusChange(
                              selectedForm.id,
                              e.target.value as ContactFormStatus
                            )
                          }
                          className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        >
                          <option value="PENDING">Pending</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="RESOLVED">Resolved</option>
                          <option value="CLOSED">Closed</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Admin Notes
                        </label>
                        <textarea
                          value={adminNotes}
                          onChange={(e) => setAdminNotes(e.target.value)}
                          rows={4}
                          className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-vertical"
                          placeholder="Add internal notes about this submission..."
                        />
                        <Button
                          onClick={() =>
                            handleSaveNotes(
                              selectedForm.id,
                              selectedForm.status
                            )
                          }
                          className="mt-2"
                          size="sm"
                        >
                          Save Notes
                        </Button>
                      </div>

                      <div className="pt-4 border-t space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Submitted:
                          </span>
                          <span>{formatDate(selectedForm.createdAt)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Last Updated:
                          </span>
                          <span>{formatDate(selectedForm.updatedAt)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <MessageSquareIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Select a contact form to view details
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
