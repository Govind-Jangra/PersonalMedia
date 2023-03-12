import { Box,  useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import space from "assets/space.mp4";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <>
    <video autoPlay muted loop id="myVideo" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}>
  <source src={space} type="video/mp4" />
</video>

    <Box>
      

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        
        <Form />
      </Box>
    </Box>
    </>
  );
};

export default LoginPage;
