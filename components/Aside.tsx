"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LuHome, LuStickyNote } from "react-icons/lu"

export default function Aside() {
  const pathname = usePathname()

  const routes = [
    { name: "Home", href: "/", icon: <LuHome /> },
    { name: "Posts", href: "/posts", icon: <LuStickyNote /> },
  ]

  return (
    <aside className="bg-[#111] p-4">
      <ul className="grid gap-1">
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              href={route.href}
              className={`${
                pathname === route.href ? "bg-[#222]" : ""
              } hover:bg-[#222] focus:outline-none focus:bg-[#333] transition min-w-[8rem] flex items-center gap-2 rounded-md py-2 px-4`}
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
