import Image from "next/image"
import Link from "next/link"

export default () => {
  return (
    <div className="overflow-auto h-full space-y-2 pb-4">
      <Photo src="https://images.unsplash.com/photo-1714572877777-59bf4765f462" />
      <Photo src="https://images.unsplash.com/photo-1713813091339-6f0581cc0db6" />
      <Photo src="https://images.unsplash.com/photo-1714399727269-7883d5d66da2" />
    </div>
  )
}

const Photo = ({ src }: { src: string }) => {
  return (
    <Link href="" className="block overflow-hidden sm:flex bg-[#333] border-[0.0625rem] border-[#444] rounded-lg">
      <Image
        src={src}
        alt="Photo"
        width={200}
        height={200}
        className="object-cover aspect-[4/3] sm:aspect-square w-full sm:w-[12.5rem]"
      />
      <div className="w-full space-y-2 p-4">
        <div className="w-full h-[2rem] bg-[#444] rounded-lg" />
        <div className="w-[80%] h-[2rem] bg-[#444] rounded-lg" />
      </div>
    </Link>
  )
}
