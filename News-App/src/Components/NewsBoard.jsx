import React, { useEffect, useState } from "react";
import Cards from './Cards';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          let errorMsg = `Error: ${response.status} - ${response.statusText}`;
          throw new Error(errorMsg);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <div className="text-center mt-3">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-3 text-danger">Error: {error}</div>;
  }

  return (
    <>
      <h2 className="text-center mt-3">
        Latest <span className="badge text-bg-danger">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <Cards
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <div className="text-center mt-3">No news articles available.</div>
      )}
    </>
  );
};

export default NewsBoard;
