import Link from "next/link"

export default function Layout({ modal, children }: { modal: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <nav className="flex items-center justify-between mb-4">
        <h1>Profile</h1>
        <Link href="/profile/login" className="bg-[#111] font-medium rounded-lg px-4 py-2">
          Log in
        </Link>
      </nav>
      {modal}
      {children}
    </div>
  )
}
