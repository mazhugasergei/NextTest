"use client"

import { useParams, useSearchParams } from "next/navigation"
import { PiPants, PiTShirt } from "react-icons/pi"

export default function Items({ items }: { items: ShopItem[] }) {
  const params = useParams<{ slug?: string[] }>()
  const searchParams = useSearchParams()

  const filtered = params.slug
    ? items.filter((product) => params.slug?.every((category) => product.categories.includes(category)))
    : items

  if (filtered.length)
    return (
      <ul className="overflow-auto grid grid-cols-3 gap-4 pb-4">
        {filtered.map(
          (product) =>
            product.title.toLowerCase().includes(searchParams.get("q")?.toLocaleLowerCase() ?? "") && (
              <li
                key={product.title}
                className="aspect-square flex flex-col items-center justify-center border-[0.0625rem] border-[#333] rounded-lg"
              >
                <div className="text-[2.5rem] mb-2">
                  {product.categories.includes("top") ? <PiTShirt /> : <PiPants />}
                </div>
                <span className="text-[.875rem] font-medium">{product.title}</span>
              </li>
            )
        )}
      </ul>
    )
  else return <div className="h-full grid place-content-center">Nothing found</div>
}
