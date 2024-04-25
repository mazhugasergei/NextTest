"use client"

import { useParams, useSearchParams } from "next/navigation"
import { PiPants, PiTShirt } from "react-icons/pi"

export default function Items({ items }: { items: ShopItem[] }) {
  const params = useParams<{ slug?: string[] }>()
  const searchParams = useSearchParams()

  const filtered = items.filter((product) => {
    // Filter by category slug if available
    const categoryFilter = params.slug ? params.slug.every((category) => product.categories.includes(category)) : true

    // Filter by search query
    const searchFilter = product.title.toLowerCase().includes(searchParams.get("q")?.toLowerCase() ?? "")

    return categoryFilter && searchFilter
  })

  if (filtered.length)
    return (
      <div className="overflow-auto pb-4">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(10rem,100%),1fr))] gap-4">
          {filtered.map((product) => (
            <li
              key={product.title}
              className="aspect-square flex flex-col items-center justify-center border-[0.0625rem] border-[#333] rounded-lg"
            >
              <div className="text-[2.5rem] mb-2">
                {product.categories.includes("top") ? <PiTShirt /> : <PiPants />}
              </div>
              <span className="text-[.875rem] font-medium">{product.title}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  else return <div className="grid place-content-center">Nothing found</div>
}
