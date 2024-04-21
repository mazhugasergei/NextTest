import Posts from "@/app/components/Posts/Posts"
import PostsHeading from "@/app/components/Posts/PostsHeading"
import Search from "@/app/components/Search"
import { fetchPosts, fetchUsers } from "../actions"

export default async function Page() {
  const posts = await fetchPosts()
  const users = await fetchUsers()

  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <div className="flex items-center justify-between gap-2 mb-2">
        <PostsHeading {...{ posts }} />
        <Search />
      </div>
      <Posts {...{ posts, users }} />
    </div>
  )
}
