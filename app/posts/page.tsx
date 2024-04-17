import Posts from "@/components/Posts/Posts"
import PostsHeading from "@/components/Posts/PostsHeading"
import Search from "@/components/Search"

export default async function Page() {
  const postsRes: Response = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 300 } })
  const posts: Post[] = await postsRes.json()
  const usersRes: Response = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 300 } })
  const users: User[] = await usersRes.json()

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
