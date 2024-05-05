import Modal from "@/app/components/Modal"
import Image from "next/image"

export default ({ params }: { params: { id: string } }) => {
  return (
    <Modal className="">
      <Image
        src={`https://images.unsplash.com/photo-${params.id}`}
        alt="Photo"
        width={700}
        height={700}
        className="mx-auto"
      />
    </Modal>
  )
}
