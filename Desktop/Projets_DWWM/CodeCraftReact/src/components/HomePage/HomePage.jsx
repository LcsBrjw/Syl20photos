import { HeroArticle } from "../HomePage/HeroArticle";
import  { Banner } from "../HomePage/Banner";


export const HomePage = () => {
  return (
    <div className="bg-[var(--light)] min-h-screen">
      <HeroArticle />
      <Banner />
    </div>
  );
};