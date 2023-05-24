import React from "react";
import { format } from "date-fns";
import PostCard from "@/components/PostCard";

async function Search(props) {
  const { search, numOfGuests, startDate, endDate } = props.searchParams;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const posts = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const postsData = await posts.json();

  return (
    <div className="flex">
      <div className="flex-grow pt-14 px-6">
        <p className="text-xs">
          300+ stays - {range} - for {numOfGuests} guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6 space-x-3 text-gray-900 whitespace-nowrap">
          Stays in {search}
        </h1>
        <div className="hidden lg:inline-flex mb-5 space-x-3">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Room and Beds</p>
          <p className="button">More Filters</p>
        </div>
        <div className="flex flex-col">
          {postsData.map((post) => (
            <PostCard
              key={post.img}
              img={post.img}
              title={post.title}
              location={post.location}
              price={post.price}
              star={post.star}
              total={post.total}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
