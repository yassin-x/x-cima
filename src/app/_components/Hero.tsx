"use client";
import { MovieType } from "@/types/app";
import Image from "next/image";
import React from "react";

export default function Hero({ data }: { data: MovieType[] }) {
  const genresMap: Record<number, string> = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const getGenres = (genreIds: number[]) => {
    return genreIds
      .map((id) => genresMap[id])
      .filter((genre) => genre)
      .join(", ");
  };
  return (
    <section className="relative h-[85vh]">
      {data.slice(0, 1).map((movie) => (
        <div key={movie.id} className="absolute inset-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_MOVIE_IMAGESURL}${movie.backdrop_path}`}
            alt={movie.title}
            fill
            priority
            loading="eager"
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end py-4 text-center px-4 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-primary drop-shadow-lg">
              {movie.title}
            </h1>
            <p className="text-lg md:text-xl text-accent max-w-2xl drop-shadow-lg">
              {movie.overview}
            </p>
            <p className="text-lg text-primary max-w-2xl drop-shadow-lg font-semibold">
              {getGenres(movie.genre_ids)}
            </p>

          </div>
        </div>
      ))}
    </section>
  );
}
