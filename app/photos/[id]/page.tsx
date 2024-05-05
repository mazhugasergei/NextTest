import Image from "next/image"

export default ({ params }: { params: { id: string } }) => {
  return (
    <div className="overflow-auto h-full grid place-content-center">
      <Image src={`https://images.unsplash.com/photo-${params.id}`} alt="Photo" width={700} height={700} />
    </div>
  )
}
