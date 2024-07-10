"use client";
import { useEffect, useState } from "react";
import MediumCard from "./Medium-Card";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@asifulalamfahim"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <div className="flex flex-wrap w-full max-w-7xl mx-auto">
      {articles.map((article, index) => (
        <div key={index} className="w-1/4 p-6">
          <MediumCard article={article} />
        </div>
      ))}
    </div>
  );
};

export default MediumArticles;
