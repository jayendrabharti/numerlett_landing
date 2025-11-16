"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function getInstagramPosts() {
  try {
    const posts = await prisma.instagramPost.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    return { success: true, data: posts };
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return { success: false, error: "Failed to fetch Instagram posts" };
  }
}

export async function getAllInstagramPosts() {
  try {
    const posts = await prisma.instagramPost.findMany({
      orderBy: { order: "asc" },
    });
    return { success: true, data: posts };
  } catch (error) {
    console.error("Error fetching all Instagram posts:", error);
    return { success: false, error: "Failed to fetch Instagram posts" };
  }
}

export async function createInstagramPost(data: {
  postId: string;
  caption?: string;
  order?: number;
}) {
  try {
    const post = await prisma.instagramPost.create({
      data: {
        postId: data.postId,
        caption: data.caption,
        order: data.order ?? 0,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin/instagram");
    return { success: true, data: post };
  } catch (error) {
    console.error("Error creating Instagram post:", error);
    return { success: false, error: "Failed to create Instagram post" };
  }
}

export async function updateInstagramPost(
  id: string,
  data: {
    postId?: string;
    caption?: string;
    order?: number;
    isActive?: boolean;
  }
) {
  try {
    const post = await prisma.instagramPost.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    revalidatePath("/admin/instagram");
    return { success: true, data: post };
  } catch (error) {
    console.error("Error updating Instagram post:", error);
    return { success: false, error: "Failed to update Instagram post" };
  }
}

export async function deleteInstagramPost(id: string) {
  try {
    await prisma.instagramPost.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/admin/instagram");
    return { success: true };
  } catch (error) {
    console.error("Error deleting Instagram post:", error);
    return { success: false, error: "Failed to delete Instagram post" };
  }
}

export async function reorderInstagramPosts(
  posts: { id: string; order: number }[]
) {
  try {
    await prisma.$transaction(
      posts.map((post) =>
        prisma.instagramPost.update({
          where: { id: post.id },
          data: { order: post.order },
        })
      )
    );
    revalidatePath("/");
    revalidatePath("/admin/instagram");
    return { success: true };
  } catch (error) {
    console.error("Error reordering Instagram posts:", error);
    return { success: false, error: "Failed to reorder Instagram posts" };
  }
}
