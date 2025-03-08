import MainHeading from "@/components/MainHeading";
import { MovieType } from "@/types/app";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Movies({
  data,
  title,
}: {
  data: MovieType[];
  title: string;
}) {
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
    <section className="py-6 md:py-8 container">
      <MainHeading title={title} />

      {data.length > 0 ? (
        <Carousel className="w-full mt-4">
          <CarouselContent>
            {data.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="xs:basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-md group">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_MOVIE_IMAGESURL}${movie.poster_path}`}
                    alt={`${movie.title || movie.name} Poster`}
                    fill
                    priority
                    loading="eager"
                    className="object-cover rounded-2xl transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-center rounded-2xl">
                    <h1 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {movie.title || movie.name}
                    </h1>
                    <p className="text-sm md:text-base text-white max-w-2xl drop-shadow-lg">
                      {getGenres(movie.genre_ids)}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer transition duration-300 hover:bg-black/60 hover:text-white" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer transition duration-300 hover:bg-black/60 hover:text-white" />
        </Carousel>
      ) : (
        <p className="text-lg text-gray-500 text-center">No Data Found</p>
      )}
    </section>
  );
}
