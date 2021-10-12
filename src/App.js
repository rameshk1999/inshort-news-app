import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import NewsContent from "./components/NewsContent";

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsResult, setNewsResult] = useState();
  const [totalResults, setTotalResults] = useState();
  const apiKey = "73a6e605014a449b93fc606c1ab38f08";
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}`
      );
      console.log("news", news);
      console.log("news", news.data.totalResults);

      setNewsResult(news.data.articles);
      setTotalResults(news.data.totalResults);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category, totalResults]);

  return (
    <div>
      <Header setCategory={setCategory} />
      <NewsContent newsResult={newsResult} />
    </div>
  );
};

export default App;
