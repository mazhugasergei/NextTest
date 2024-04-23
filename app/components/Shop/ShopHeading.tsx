"use client"

import { useParams, useSearchParams } from "next/navigation"

export default function ShopHeading({ items }: { items: ShopItem[] }) {
  const params = useParams<{ slug?: string[] }>()
  const searchParams = useSearchParams()

  const filtered = params.slug
    ? items.filter((product) => params.slug?.every((category) => product.categories.includes(category)))
    : items

  return (
    <div>
      <h1>Shop</h1>
      <p className="text-sm text-[#999]">
        {!searchParams.get("q") ? "Total " : "Found "}
        {filtered.reduce(
          (acc, post) =>
            acc + (post.title.toLowerCase().includes(searchParams.get("q")?.toLocaleLowerCase() ?? "") ? 1 : 0),
          0
        )}
        {" items"}
      </p>
    </div>
  )
}
