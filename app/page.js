import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";

export default async function Home() {
  const citiesRes = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const cititesData = await citiesRes.json();

  const housesRes = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const housesData = await housesRes.json();

  return (
    <>
      <Banner />
      <section className="pt-6 section">
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cititesData?.map((item) => (
            <SmallCard
              key={item.location}
              image={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
        <div className="flex overflow-x-scroll scrollbar-hide -ml-4">
          {housesData.map((item) => (
            <MediumCard key={item.title} image={item.img} title={item.title} />
          ))}
        </div>
      </section>
      <section className="section">
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb"
          buttonText="Get Inspired"
        />
      </section>
    </>
  );
}
