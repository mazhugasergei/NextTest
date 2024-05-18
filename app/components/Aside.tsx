"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LuHome, LuShoppingCart, LuStickyNote, LuUser2 } from "react-icons/lu"
import { TbApi, TbPhoto } from "react-icons/tb"

export default function Aside() {
  const pathname = usePathname()

  const routes = [
    { name: "Home", href: "/", icon: <LuHome /> },
    { name: "Posts", href: "/posts", icon: <LuStickyNote /> },
    { name: "Shop", href: "/shop", icon: <LuShoppingCart /> },
    { name: "Photos", href: "/photos", icon: <TbPhoto /> },
    { name: "Handlers", href: "/handlers", icon: <TbApi /> },
    { name: "Profile", href: "/profile", icon: <LuUser2 /> },
  ]

  return (
    <aside className="lg:w-[12rem] bg-[#111] p-4">
      <ul className="grid gap-1">
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              href={route.href}
              className={`${
                `/${pathname.substring(1).split("/")[0]}` === route.href ? "bg-[#222]" : ""
              } hover:bg-[#222] focus:outline-none focus-visible:bg-[#333] transition min-w-[8rem] flex items-center gap-2 rounded-md py-2 px-4`}
            >
              <span>{route.icon}</span>
              <span>{route.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
