import { LuGhost } from "react-icons/lu"

export default function NotFound() {
  return (
    <div className="h-full grid place-content-center gap-2">
      <div className="flex items-center justify-center gap-2 text-[2rem] font-medium">
        <LuGhost className="" />
        <span>404</span>
      </div>
      <p className="text-[.875rem]">This page could not be found.</p>
    </div>
  )
}
