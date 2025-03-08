import Hero from "./_components/Hero";
import Movies from "./_components/Movies";

export default async function Home() {
  const FilmsData = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_BASEURL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const FilmsDataJson = await FilmsData.json();

  const EposideData = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_BASEURL}/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const EposideDataJson = await EposideData.json();

  const FilmsTopRated = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_BASEURL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const FilmsTopRatedJson = await FilmsTopRated.json();

  const EposideTopRated = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_BASEURL}/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const EposideTopRatedJson = await EposideTopRated.json();

  // const WeekMovis = await fetch(
  //   `${process.env.NEXT_PUBLIC_MOVIE_BASEURL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  // );
  // const weekData = await WeekMovis.json();

  return (
    <main>
      <Hero data={FilmsDataJson.results} />
      <Movies data={FilmsTopRatedJson.results} title={"Top Rated Movies"} />
      <Movies data={EposideTopRatedJson.results} title={"Top Rated Eposides"} />
      <Movies data={FilmsDataJson.results} title={"Popular Movies"} />
      <Movies data={EposideDataJson.results} title={"Popular Eposides"} />
    </main>
  );
}
