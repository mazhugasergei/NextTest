"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("q") ?? "")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    router.push("?q=" + e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Search"
      className="focus:outline-none bg-[#333] rounded-lg border-[0.0625rem] border-[#444] py-2 px-3"
      value={search}
      onChange={handleSearch}
    />
  )
}
