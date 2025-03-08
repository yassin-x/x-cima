import { MovieType } from "@/types/app";
import React from "react";
import Movies from "../_components/Movies";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { name?: string };
}) {
  const query = searchParams.name;
  if (!query) return <p className="text-center mt-12">No Data Found</p>;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_BASEURL}/search/multi?query=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) {
    return <p className="text-center mt-12">No Data Found</p>;
  }

  const data = await res.json();

  const filteredResults = data.results.filter(
    (item: MovieType) => item.media_type === "movie" || item.media_type === "tv"
  );
  return (
    <main className="mt-12 md:mt-14">
      <Movies title="Search Results" data={filteredResults} />
    </main>
  );
}
