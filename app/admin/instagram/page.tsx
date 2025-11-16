import { getAllInstagramPosts } from "@/actions/instagram";
import InstagramClient from "@/components/admin/InstagramClient";

export default async function InstagramPage() {
  const result = await getAllInstagramPosts();
  const posts = result.success ? result.data || [] : [];

  return <InstagramClient initialPosts={posts} />;
}
