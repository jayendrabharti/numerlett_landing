import { getDashboardStats } from "@/actions/dashboard";
import DashboardStatCard from "@/components/admin/DashboardStatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UsersIcon,
  MessageSquareIcon,
  InstagramIcon,
  AlertCircleIcon,
  CheckCircleIcon,
} from "lucide-react";

export default async function AdminPage() {
  const result = await getDashboardStats();
  const stats = result.success ? result.data : null;

  if (!stats) {
    return (
      <div className="text-destructive">
        Failed to load dashboard statistics
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your website's activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardStatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<UsersIcon className="h-4 w-4" />}
        />
        <DashboardStatCard
          title="Contact Forms"
          value={stats.totalContactForms}
          icon={<MessageSquareIcon className="h-4 w-4" />}
          shortcut={{
            link: "/admin/contact",
            label: "View all",
          }}
        />
        <DashboardStatCard
          title="Pending Forms"
          value={stats.pendingContactForms}
          icon={<AlertCircleIcon className="h-4 w-4" />}
          shortcut={{
            link: "/admin/contact",
            label: "Review",
          }}
        />
        <DashboardStatCard
          title="Active Posts"
          value={stats.activeInstagramPosts}
          icon={<InstagramIcon className="h-4 w-4" />}
          shortcut={{
            link: "/admin/instagram",
            label: "Manage",
          }}
        />
      </div>

      {/* Recent Contact Forms */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Contact Forms</CardTitle>
        </CardHeader>
        <CardContent>
          {stats.recentContactForms.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No contact forms submitted yet
            </p>
          ) : (
            <div className="space-y-3">
              {stats.recentContactForms.map((form) => (
                <div
                  key={form.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex-1">
                    <p className="font-medium">{form.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {form.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        form.status === "PENDING"
                          ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
                          : form.status === "IN_PROGRESS"
                          ? "bg-blue-500/10 text-blue-700 dark:text-blue-400"
                          : form.status === "RESOLVED"
                          ? "bg-green-500/10 text-green-700 dark:text-green-400"
                          : "bg-gray-500/10 text-gray-700 dark:text-gray-400"
                      }`}
                    >
                      {form.status.replace("_", " ")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(form.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <a href="/admin/contact">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MessageSquareIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Manage Contact Forms</h3>
                  <p className="text-sm text-muted-foreground">
                    View and respond to submissions
                  </p>
                </div>
              </div>
            </CardContent>
          </a>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <a href="/admin/instagram">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <InstagramIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Manage Instagram Posts</h3>
                  <p className="text-sm text-muted-foreground">
                    Add or remove featured posts
                  </p>
                </div>
              </div>
            </CardContent>
          </a>
        </Card>
      </div>
    </div>
  );
}
