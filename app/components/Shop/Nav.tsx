"use client"

import { useParams } from "next/navigation"
import Link from "next/link"

export default function Nav({ items }: { items: ShopItem[] }) {
  const params = useParams<{ slug?: string[] }>()

  const filtered = params.slug
    ? items.filter((product) => params.slug?.every((category) => product.categories.includes(category)))
    : items

  const restCategories = (() => {
    const items = filtered.map(({ categories }) => categories).flat()
    const set = new Set(items)
    return Array.from(set).filter((category) => !params.slug?.includes(category))
  })()

  return (
    <ul className="flex gap-1 mb-4">
      {/* chosen categories */}
      {params.slug &&
        params.slug.map((slug) => (
          <li key={slug}>
            <Link
              href={`/shop/${params.slug?.filter((category) => category !== slug).join("/")}`}
              key={slug}
              className="text-sm bg-[#444] rounded-full px-3 py-1"
            >
              {slug}
            </Link>
          </li>
        ))}
      {/* rest categories */}
      {restCategories.map((category) => (
        <li key={category}>
          <Link
            href={`/shop/${params.slug ? params.slug.join("/") + "/" : ""}${category}`}
            key={category}
            className="transition text-sm bg-[#333] hover:bg-[#444] focus-visible:bg-[#444] focus:outline-none rounded-full px-3 py-1"
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}
