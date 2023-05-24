import Image from "next/image";

function MediumCard({ image, title }) {
  return (
    <div className="pt-3 pb-3 scale-95 cursor-pointer hover:scale-100 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={image} fill={true} alt={title} />
      </div>
      <h3 className="text-2xl m4-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
