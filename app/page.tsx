export default async function Page() {
  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <h1 className="mb-4">Home</h1>
      <div className="overflow-auto scrollbar-hidden pb-4 -mb-4">
        <div className="bg-[#333] rounded-lg border-[0.0625rem] border-[#444] px-6 py-4">
          <h1>Next Test</h1>
          <p>Here I test Next.js features.</p>
        </div>
      </div>
    </div>
  )
}
