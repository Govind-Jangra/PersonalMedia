import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";

import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/Meme";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import DailyNews from "scenes/widgets/DailyNews";
import FlexBetween from "components/FlexBetween";
const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          
          <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <Box m="4rem 0" />
          <FlexBetween fontSize="40px">
          
          <div role="img" style={{ display: "flex", justifyContent: "center" }} aria-label="smiley face">
        🙂🙂🙂🙂Total Posts🙂🙂🙂🙂
      </div>
          </FlexBetween>
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <DailyNews/>
            
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
