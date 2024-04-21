"use client"

import { useSearchParams } from "next/navigation"

export default function PostsHeading({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams()

  return (
    <div>
      <h1>Posts</h1>
      <p className="text-sm text-[#999]">
        {!searchParams.get("q") ? "Total " : "Found "}
        {posts.reduce(
          (acc, post) =>
            acc + (post.title.toLowerCase().includes(searchParams.get("q")?.toLocaleLowerCase() ?? "") ? 1 : 0),
          0
        )}
        {" posts"}
      </p>
    </div>
  )
}
