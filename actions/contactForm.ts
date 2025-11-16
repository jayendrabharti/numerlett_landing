"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { ContactFormStatus } from "@/prisma/generated/enums";

export async function getContactForms(status?: ContactFormStatus) {
  try {
    const forms = await prisma.contactForm.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: forms };
  } catch (error) {
    console.error("Error fetching contact forms:", error);
    return { success: false, error: "Failed to fetch contact forms" };
  }
}

export async function getContactFormById(id: string) {
  try {
    const form = await prisma.contactForm.findUnique({
      where: { id },
    });
    return { success: true, data: form };
  } catch (error) {
    console.error("Error fetching contact form:", error);
    return { success: false, error: "Failed to fetch contact form" };
  }
}

export async function createContactForm(data: {
  email: string;
  name: string;
  mobile: string;
  message: string;
}) {
  try {
    const form = await prisma.contactForm.create({
      data,
    });
    revalidatePath("/admin/contact");
    return { success: true, data: form };
  } catch (error) {
    console.error("Error creating contact form:", error);
    return { success: false, error: "Failed to submit contact form" };
  }
}

export async function updateContactFormStatus(
  id: string,
  status: ContactFormStatus,
  adminNotes?: string
) {
  try {
    const form = await prisma.contactForm.update({
      where: { id },
      data: {
        status,
        adminNotes: adminNotes ?? undefined,
      },
    });
    revalidatePath("/admin/contact");
    return { success: true, data: form };
  } catch (error) {
    console.error("Error updating contact form status:", error);
    return { success: false, error: "Failed to update contact form status" };
  }
}

export async function deleteContactForm(id: string) {
  try {
    await prisma.contactForm.delete({
      where: { id },
    });
    revalidatePath("/admin/contact");
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact form:", error);
    return { success: false, error: "Failed to delete contact form" };
  }
}

export async function getContactFormStats() {
  try {
    const [total, pending, inProgress, resolved, closed] = await Promise.all([
      prisma.contactForm.count(),
      prisma.contactForm.count({ where: { status: "PENDING" } }),
      prisma.contactForm.count({ where: { status: "IN_PROGRESS" } }),
      prisma.contactForm.count({ where: { status: "RESOLVED" } }),
      prisma.contactForm.count({ where: { status: "CLOSED" } }),
    ]);

    return {
      success: true,
      data: {
        total,
        pending,
        inProgress,
        resolved,
        closed,
      },
    };
  } catch (error) {
    console.error("Error fetching contact form stats:", error);
    return { success: false, error: "Failed to fetch contact form stats" };
  }
}
