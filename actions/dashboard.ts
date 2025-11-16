"use server";

import prisma from "@/prisma/client";

export async function getDashboardStats() {
  try {
    const [
      totalUsers,
      totalContactForms,
      pendingContactForms,
      totalInstagramPosts,
      activeInstagramPosts,
      recentContactForms,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.contactForm.count(),
      prisma.contactForm.count({ where: { status: "PENDING" } }),
      prisma.instagramPost.count(),
      prisma.instagramPost.count({ where: { isActive: true } }),
      prisma.contactForm.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          status: true,
          createdAt: true,
        },
      }),
    ]);

    return {
      success: true,
      data: {
        totalUsers,
        totalContactForms,
        pendingContactForms,
        totalInstagramPosts,
        activeInstagramPosts,
        recentContactForms,
      },
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return { success: false, error: "Failed to fetch dashboard stats" };
  }
}
