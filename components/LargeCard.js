import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  console.log(img);
  return (
    <div className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          style={{ objectFit: "cover" }}
          alt={title}
          fill={true}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:bg-gray-600 active:scale-90 transition duration-150">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
