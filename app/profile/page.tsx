export default () => {
  return (
    <div className="overflow-auto flex flex-col gap-4 pb-4">
      <div className="flex items-center gap-4">
        <div className="shrink-0 aspect-square w-[10rem] bg-[#333] rounded-full" />
        <div className="w-full grid gap-4">
          <div className="h-[2rem] bg-[#333] rounded-lg" />
          <div className="w-[80%] h-[2rem] bg-[#333] rounded-lg" />
        </div>
      </div>

      <div className="h-[2rem] bg-[#333] rounded-lg" />
      <div className="w-[80%] h-[2rem] bg-[#333] rounded-lg" />
    </div>
  )
}
