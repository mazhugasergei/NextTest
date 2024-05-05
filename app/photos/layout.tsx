export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <nav className="flex items-center justify-between mb-4">
        <h1>Photos</h1>
      </nav>
      {children}
    </div>
  )
}
