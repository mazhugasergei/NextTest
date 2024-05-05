"use client"

import { useRouter } from "next/navigation"

export default ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const router = useRouter()

  return (
    <div className="absolute inset-0 isolate grid place-items-center h-full bg-[#000000cc] backdrop-blur p-4">
      <button
        onClick={router.back}
        className="aspect-square w-[2.5rem] absolute top-4 right-4 grid place-content-center bg-[#222] rounded-lg"
      >
        ✕
      </button>
      <div onClick={router.back} className="absolute inset-0 z-[-1]"></div>
      <div className={`w-full bg-[#222] border-[0.0625rem] border-[#444] rounded-lg p-8 ${className}`}>{children}</div>
    </div>
  )
}
