"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PlusIcon,
  TrashIcon,
  EditIcon,
  GripVerticalIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import { toast } from "sonner";
import {
  createInstagramPost,
  updateInstagramPost,
  deleteInstagramPost,
  reorderInstagramPosts,
} from "@/actions/instagram";

interface InstagramPost {
  id: string;
  postId: string;
  caption: string | null;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface InstagramClientProps {
  initialPosts: InstagramPost[];
}

export default function InstagramClient({
  initialPosts,
}: InstagramClientProps) {
  const [posts, setPosts] = useState<InstagramPost[]>(initialPosts);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [newPost, setNewPost] = useState({ postId: "", caption: "" });
  const [editData, setEditData] = useState({ postId: "", caption: "" });

  const handleAddPost = async () => {
    if (!newPost.postId.trim()) {
      toast.error("Post ID is required");
      return;
    }

    const result = await createInstagramPost({
      postId: newPost.postId.trim(),
      caption: newPost.caption.trim() || undefined,
      order: posts.length,
    });

    if (result.success && result.data) {
      setPosts([...posts, result.data]);
      setNewPost({ postId: "", caption: "" });
      setIsAddingPost(false);
      toast.success("Instagram post added successfully");
    } else {
      toast.error(result.error || "Failed to add post");
    }
  };

  const handleUpdatePost = async (id: string) => {
    if (!editData.postId.trim()) {
      toast.error("Post ID is required");
      return;
    }

    const result = await updateInstagramPost(id, {
      postId: editData.postId.trim(),
      caption: editData.caption.trim() || undefined,
    });

    if (result.success && result.data) {
      setPosts(posts.map((p) => (p.id === id ? result.data! : p)));
      setEditingPost(null);
      toast.success("Instagram post updated successfully");
    } else {
      toast.error(result.error || "Failed to update post");
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const result = await deleteInstagramPost(id);

    if (result.success) {
      setPosts(posts.filter((p) => p.id !== id));
      toast.success("Instagram post deleted successfully");
    } else {
      toast.error(result.error || "Failed to delete post");
    }
  };

  const handleToggleActive = async (id: string, isActive: boolean) => {
    const result = await updateInstagramPost(id, { isActive: !isActive });

    if (result.success && result.data) {
      setPosts(posts.map((p) => (p.id === id ? result.data! : p)));
      toast.success(
        `Post ${!isActive ? "activated" : "deactivated"} successfully`
      );
    } else {
      toast.error(result.error || "Failed to update post");
    }
  };

  const movePost = async (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= posts.length) return;

    const newPosts = [...posts];
    [newPosts[index], newPosts[newIndex]] = [
      newPosts[newIndex],
      newPosts[index],
    ];

    const updates = newPosts.map((post, idx) => ({
      id: post.id,
      order: idx,
    }));

    setPosts(newPosts);

    const result = await reorderInstagramPosts(updates);
    if (!result.success) {
      toast.error(result.error || "Failed to reorder posts");
      setPosts(posts); // Revert on error
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Instagram Posts</h1>
          <p className="text-muted-foreground">
            Manage Instagram posts displayed on your homepage
          </p>
        </div>
        <Button onClick={() => setIsAddingPost(true)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Post
        </Button>
      </div>

      {isAddingPost && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Instagram Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Post ID *</label>
              <input
                type="text"
                value={newPost.postId}
                onChange={(e) =>
                  setNewPost({ ...newPost, postId: e.target.value })
                }
                placeholder="e.g., DQEIFabANQl"
                className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1">
                The post ID from the Instagram URL (e.g., instagram.com/p/
                <strong>DQEIFabANQl</strong>/)
              </p>
            </div>
            <div>
              <label className="text-sm font-medium">Caption (Optional)</label>
              <input
                type="text"
                value={newPost.caption}
                onChange={(e) =>
                  setNewPost({ ...newPost, caption: e.target.value })
                }
                placeholder="Optional caption for internal reference"
                className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddPost}>Add Post</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddingPost(false);
                  setNewPost({ postId: "", caption: "" });
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {posts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No Instagram posts added yet. Click "Add Post" to get started.
              </p>
            </CardContent>
          </Card>
        ) : (
          posts.map((post, index) => (
            <Card key={post.id} className={!post.isActive ? "opacity-60" : ""}>
              <CardContent className="p-4">
                {editingPost === post.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Post ID *</label>
                      <input
                        type="text"
                        value={editData.postId}
                        onChange={(e) =>
                          setEditData({ ...editData, postId: e.target.value })
                        }
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Caption</label>
                      <input
                        type="text"
                        value={editData.caption}
                        onChange={(e) =>
                          setEditData({ ...editData, caption: e.target.value })
                        }
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => handleUpdatePost(post.id)}>
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setEditingPost(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => movePost(index, "up")}
                        disabled={index === 0}
                      >
                        <GripVerticalIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => movePost(index, "down")}
                        disabled={index === posts.length - 1}
                      >
                        <GripVerticalIcon className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex-1">
                      <div className="font-medium">
                        Post ID: {post.postId}
                        {!post.isActive && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            (Hidden)
                          </span>
                        )}
                      </div>
                      {post.caption && (
                        <p className="text-sm text-muted-foreground">
                          {post.caption}
                        </p>
                      )}
                      <a
                        href={`https://www.instagram.com/p/${post.postId}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        View on Instagram →
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleToggleActive(post.id, post.isActive)
                        }
                      >
                        {post.isActive ? (
                          <EyeIcon className="h-4 w-4" />
                        ) : (
                          <EyeOffIcon className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setEditingPost(post.id);
                          setEditData({
                            postId: post.postId,
                            caption: post.caption || "",
                          });
                        }}
                      >
                        <EditIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <TrashIcon className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
