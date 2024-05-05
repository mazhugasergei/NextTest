import Image from "next/image"
import Link from "next/link"

const photos = [
  "1714572877777-59bf4765f462",
  "1713813091339-6f0581cc0db6",
  "1714399727269-7883d5d66da2",
  "1590039357712-fc03d4d4f2b5",
  "1711656166230-8e8ecfab7732",
  "1714756034183-42581eacfb05",
  "1714122252720-127dd9825098",
]

export default () => {
  return (
    <div className="overflow-auto pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {photos.map((id) => (
          <Photo key={id} id={id} />
        ))}
      </div>
    </div>
  )
}

const Photo = ({ id }: { id: string }) => {
  return (
    <Link href={`/photos/${id}`} className="block overflow-hidden aspect-[4/3] rounded-lg">
      <Image
        src={`https://images.unsplash.com/photo-${id}`}
        alt="Photo"
        width={200}
        height={150}
        className="object-cover w-full h-full"
      />
    </Link>
  )
}
