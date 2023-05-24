"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const onSearch = () => {
    setSearch("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          width={150}
          height={150}
          alt="logo"
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      <div className="flex items-center md:border-2 border-2 rounded-full py-2 md:shadow-lg">
        <input
          className="flex-grow pl-5 bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
          value={search}
          onChange={searchChangeHandler}
        />

        <MagnifyingGlassIcon
          onClick={() => setSearch("where to go...")}
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2"
        />
      </div>
      <div className="flex items-center space-x-4 justify-center text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {search && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              min={1}
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearch("")}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                query: {
                  search: search,
                  numOfGuests: numOfGuests,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                },
              }}
            >
              <button onClick={onSearch} className="flex-grow text-red-500">
                Search
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
