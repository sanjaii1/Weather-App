import React from "react";
import { Box, Grid } from "@mui/material";
import Weather from "./componets/weather";
import styles from "./style";
import { useTheme } from "@mui/material/styles";
import backgroundImage from '../assets/weatherBg.jpg';

const Index = () => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <>
      <div>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius:'10px',
                  margin:'10px'
                }}
              >
                <Weather />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Index;
