export default async () => {
  const { data } = await fetch("http://localhost:3000/api")
    .then((res) => res.json())
    .catch((err) => ({ data: err.message }))

  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <h1 className="mb-4">Handlers</h1>
      <div className="overflow-auto scrollbar-hidden pb-4 -mb-4">
        <div className="bg-[#333] rounded-lg border-[0.0625rem] border-[#444] px-6 py-4">
          <h1>API Response</h1>
          <p>{data}</p>
        </div>
      </div>
    </div>
  )
}
