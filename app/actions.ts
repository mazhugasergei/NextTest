"use server"

export const fetchPosts = async () => {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 300 } })
  const posts: Post[] = await response.json()
  return posts
}

export const fetchUsers = async () => {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 300 } })
  const users: User[] = await response.json()
  return users
}
