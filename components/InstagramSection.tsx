import { getInstagramPosts } from "@/actions/instagram";
import InstagramEmbedClient from "./InstagramEmbedClient";

export default async function InstagramSection() {
  const result = await getInstagramPosts();
  const posts = result.success ? result.data || [] : [];

  return <InstagramEmbedClient posts={posts} />;
}
