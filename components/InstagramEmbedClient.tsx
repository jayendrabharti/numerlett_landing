"use client";

import { InstagramEmbed } from "react-social-media-embed";

interface InstagramPost {
  id: string;
  postId: string;
}

interface InstagramEmbedClientProps {
  posts: InstagramPost[];
}

export default function InstagramEmbedClient({
  posts,
}: InstagramEmbedClientProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-row flex-wrap gap-8">
      {posts.map((post) => (
        <InstagramEmbed
          key={post.id}
          url={`https://www.instagram.com/p/${post.postId}/`}
        />
      ))}
    </section>
  );
}
