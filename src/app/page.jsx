import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/apiLibs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry");
  recommendedAnime = reproduce(recommendedAnime, 10);
  const newSeasonAnime = await getAnimeResponse("seasons/now", "limit=10");

  return (
    <>
      <section>
        <Header title="Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
      <section>
        <Header
          title="Summer 2024 Anime"
          linkTitle="Lihat Semua"
          linkHref="/newSeasons"
        />
        <AnimeList api={newSeasonAnime} />
      </section>
    </>
  );
};

export default Page;
