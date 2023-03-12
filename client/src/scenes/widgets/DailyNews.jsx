import { Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import React, { useState, useEffect } from 'react';

const NewsWidget = () => {
  const [article, setArticle] = useState(null);
  
  const handleCreateAd = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c3192111e44241e696e6cceec3cbd1ff')
      .then(response => response.json())
      .then(data => {
        // Choose a random article from the response
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setArticle(data.articles[randomIndex]);
      })
      .catch(error => console.error(error));
  };
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c3192111e44241e696e6cceec3cbd1ff')
      .then(response => response.json())
      .then(data => {
        // Choose a random article from the response
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setArticle(data.articles[randomIndex]);
      })
      .catch(error => console.error(error));
  }, []);

  if (!article) {
    return null;
  }

  return (
    <WidgetWrapper>
    <FlexBetween>
        <Typography color="blue" variant="h5" fontWeight="500" style={{fontsize: "40px"}}>
          Today's Top Headlines :: 
        </Typography>
        <Typography color="#a3a3a3"  onClick={handleCreateAd} style={{ cursor: 'pointer' ,fontSize: "20px"}}>SEE NEXT :: </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography variant="h5" fontWeight="500" style={{fontsize: "50px"}}>
          {article.title}
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="image not loaded"
        src={article.urlToImage}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography m="0.5rem 0" style={{fontsize: "20px"}}>
        {article.description}
      </Typography>
      <Typography color="#a3a3a3" m="0.5rem 0" style={{fontsize: "50px"}}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h1>Read more</h1>
        </a>
      </Typography>
    </WidgetWrapper>
  );
};

export default NewsWidget;
