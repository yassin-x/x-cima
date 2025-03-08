"use client";
import { MovieListType } from "@/types/app";
import { Pagination } from "antd";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function MoviesPage() {
  const [data, setData] = React.useState<MovieListType>();
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const FilmsData = await fetch(
        `${process.env.NEXT_PUBLIC_MOVIE_BASEURL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
        {
          next: { revalidate: 3600 },
        }
      );

      const FilmsDataJson = await FilmsData.json();
      setData(FilmsDataJson);
      setLoading(false);
    };
    fetchData();
  }, [page]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderIcon className="animate-spin w-12 h-12"></LoaderIcon>
      </div>
    );
  }

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
    <main className="mt-12 md:mt-14">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 md:py-8">
        {data?.results.map((item) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={item.id}
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-md group">
              <Image
                src={`${process.env.NEXT_PUBLIC_MOVIE_IMAGESURL}${item.poster_path}`}
                alt={`${item.title || item.name} Poster`}
                fill
                priority
                loading="lazy"
                className="object-cover rounded-2xl transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-center rounded-2xl">
                <h1 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {item.title || item.name}
                </h1>
                <p className="text-sm md:text-base text-white max-w-2xl drop-shadow-lg">
                  {getGenres(item.genre_ids)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="container flex justify-center items-center py-4">
        <Pagination
          total={data?.total_pages}
          showLessItems
          pageSize={20}
          defaultPageSize={20}
          current={page}
          showSizeChanger={false}
          onChange={(e) => setPage(e)}
          className="text-white!"
        />
      </div>
    </main>
  );
}
