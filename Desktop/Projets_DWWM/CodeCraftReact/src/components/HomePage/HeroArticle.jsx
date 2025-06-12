import { useLatestArticle } from "../../config/functions";

export function HeroArticle() {
  const { article, loading } = useLatestArticle();


 if (loading || !article) {
    return <h1>Chargement...</h1>;
  }

  return (
    <div>
      <h1 className="gradient-text text-center text-7xl text-[var(--dark)]">A la une</h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:w-[900px] w-full mx-auto bg-[var(--primary)] rounded-sm py-10 px-4 md:px-10">
        <img src={article.banner_url || ""} alt="banner" className="rounded-sm max-w-[500px] lg:max-w-[900px] mx-auto" />
        <div>
          <h2 className="text-2xl text-white font-medium mb-4">{article.title}</h2>
          <p className="text-white text-sm mb-3">par : {article.user?.username || "Auteur inconnu"}</p>
          <p className="text-white font-thin">
            <strong>Aperçu de l'article :</strong>{" "}
            {article.content.length > 150
              ? article.content.substring(0, 150) + "..."
              : article.content}
          </p>
          <div className="w-full flex justify-between items-center mt-4">
            <a className="px-2 py-1 bg-[var(--dark)] rounded-full text-white" href="#">{article.tag}</a>
            <a className="px-4 py-2 bg-[var(--light)] text-[var(--dark)] hover:bg-[var(--cta)] hover:text-[var(--light)] rounded-sm" href="#">Voir plus..</a>
          </div>
        </div>
      </div>
    </div>
  );
}

