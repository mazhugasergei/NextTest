"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { LuUser2 } from "react-icons/lu"

export default function Posts({ posts, users }: { posts: Post[]; users: User[] }) {
  const searchParams = useSearchParams()

  return (
    <ul className="overflow-auto scrollbar-hidden space-y-2">
      {posts.map(
        (post) =>
          post.title.toLowerCase().includes(searchParams.get("q")?.toLocaleLowerCase() ?? "") && (
            <li key={post.id} className="grid">
              <Link
                href={"/"}
                className="focus:outline-none focus:bg-[#444] bg-[#333] rounded-lg border-[0.0625rem] border-[#444] px-6 py-4"
              >
                <div className="text-[1.5rem] leading-[1.8rem] mb-1">
                  {post.title[0].toUpperCase() + post.title.slice(1)}
                </div>
                <div className="mb-2">{post.body.slice(0, 50) + "..."}</div>
                <div className="flex items-center gap-1">
                  <div className="w-[1.25rem] h-[1.25rem] grid place-items-center bg-[#222] rounded-full border-[0.0625rem] border-[#444]">
                    <LuUser2 className="w-[50%] h-[50%] stroke-[0.125rem] stroke-[#666]" />
                  </div>
                  <span className="text-[.8rem] text-[#999]">
                    {users.find((user) => user.id === post.userId)?.name ?? "Unknown user"}
                  </span>
                </div>
              </Link>
            </li>
          )
      )}
    </ul>
  )
}
