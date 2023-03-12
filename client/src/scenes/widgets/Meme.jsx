import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import React, { useState, useEffect } from 'react';
const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  const [imageUrl, setImageUrl] = useState('');

  const handleCreateAd = () => {
    setImageUrl('');
  };
  
  useEffect(() => {
    if (!imageUrl) {
      fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => setImageUrl(data.url))
        .catch(error => console.error(error));
    }
  }, [imageUrl]);
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Meme Of the Moment :: 
        </Typography>
        <Typography color="#a3a3a3"  onClick={handleCreateAd} style={{ cursor: 'pointer' ,fontSize: "20px"}}>Create Meme</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="meme"
        src={imageUrl}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      
      <Typography color="#a3a3a3" m="0.5rem 0" style={{ fontSize: "20px"}}>
        This is meme community generator where you will get amazing meme whe you want;
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
