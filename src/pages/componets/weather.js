import React from "react"; // ,{useState,useEffect}
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import styles from "../style";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Divider from "@mui/material/Divider";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
// import axios from 'axios';

function Weather() {
  const theme = useTheme();
  const style = styles(theme);

  //   const [weatherData, setWeatherData] = useState(null);
  //   const [forecastData, setForecastData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchWeatherData = async () => {
  //       try {
  //         // Replace with your actual API key and parameters
  //         const weatherResponse = await axios.get(
  //           `http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=YOUR_API_KEY`
  //         );
  //         setWeatherData(weatherResponse.data);

  //         // Call additional API
  //         const forecastResponse = await axios.get(
  //           `http://api.openweathermap.org/data/2.5/forecast?q=Los%20Angeles&appid=YOUR_API_KEY`
  //         );
  //         setForecastData(forecastResponse.data);

  //         setLoading(false);
  //       } catch (err) {
  //         setError(err);
  //         setLoading(false);
  //       }
  //     };

  //     fetchWeatherData();
  //   }, []);

  //   if (loading) return <Typography>Loading...</Typography>;
  //   if (error) return <Typography>Error: {error.message}</Typography>;
  //   if (!weatherData || !forecastData) return <Typography>No data available</Typography>;

  //   const temDataTime1 = forecastData.list.slice(0, 5).map(item => ({
  //     time: new Date(item.dt * 1000).toLocaleTimeString(),
  //     temp: (item.main.temp - 273.15).toFixed(1) // Convert from Kelvin to Celsius
  //   }));

  //   const temDataTime2 = forecastData.list.slice(5, 10).map(item => ({
  //     time: new Date(item.dt * 1000).toLocaleTimeString(),
  //     temp: (item.main.temp - 273.15).toFixed(1) // Convert from Kelvin to Celsius
  //   }));

  const temDataTime1 = [
    {
      time: "Now",
      temp: "23",
    },
    {
      time: "2 Am",
      temp: "25",
    },
    {
      time: "3 Am",
      temp: "24",
    },
    {
      time: "4 Am",
      temp: "24",
    },
    {
      time: "5 Am",
      temp: "24",
    },
  ];
  const temDataTime2 = [
    {
      time: "6 Am",
      temp: "25",
    },
    {
      time: "7 Am",
      temp: "25",
    },
    {
      time: "8 Am",
      temp: "25",
    },
    {
      time: "9 Am",
      temp: "23",
    },
    {
      time: "10 Am",
      temp: "23",
    },
  ];

  return (
    <Box sx={style.weatherBox}>
      <Grid container spacing={2} sx={style.weatherGrid}>
        <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
          <Card
            style={{
              backgroundColor: "#FAE2BD",
              borderRadius: "30px",
              padding: "55px",
            }}
          >
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box>
                    <Typography
                      style={{
                        color: "#EFAA82",
                        fontSize: "16PX",
                        fontWeight: "600",
                      }}
                    >
                      Today
                    </Typography>
                  </Box>
                  <Box>
                    <KeyboardArrowDownIcon
                      style={{
                        fontSize: "24px",
                        color: "#EFAA82",
                        marginLeft: "5px",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "-18px",
                  }}
                >
                  <WbSunnyIcon
                    sx={{
                      fontSize: "50px",
                      color: "#EFAA82",
                      marginLeft: "0px",
                      marginTop: "12px",
                      marginRight: "10px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#EFAA82",
                      fontSize: "50px",
                      fontWeight: "600",
                    }}
                  >
                    32
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#EFAA82",
                      fontWeight: "600",
                      fontSize: "16PX",
                    }}
                  >
                    Sunny
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#EFAA82",
                      fontWeight: "500",
                      fontSize: "14PX",
                    }}
                  >
                    California, Los Angeles
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#EFAA82",
                      fontWeight: "500",
                      fontSize: "14PX",
                    }}
                  >
                    21 Oct 2019
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#EFAA82",
                        fontWeight: "500",
                        fontSize: "14PX",
                      }}
                    >
                      Feel like 30
                    </Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem={1}
                    sx={{
                      color: "#EFAA82",
                      marginLeft: "4px",
                      marginRight: "4px",
                      backgroundColor: "#EFAA82",
                      opacity: "0.8",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: "#EFAA82",
                        fontWeight: "500",
                        fontSize: "14PX",
                      }}
                    >
                      Sunset 18:20
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                style={{
                  background: "#fae2bd85",
                  borderRadius: "30px",
                  marginBottom: "-8px",
                  display: "flex",
                  padding: "40px",
                  borderRadius: "11.99px",
                  width: "fit-content",
                }}
              >
                
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      {temDataTime1.slice(0, 5).map((data, index) => (
                        <Box key={index}>
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "14px",
                              marginRight: "8px",
                              marginTop: "3px",
                            }}
                          >
                            {data.time}
                          </Typography>
                          <Box style={{ display: "flex" }}>
                            <WbCloudyIcon
                              sx={{
                                fontSize: "20px",
                                color: "#fff",
                                paddingTop: "0px",
                                marginTop: "3px",
                                marginRight: "3px",
                              }}
                            />

                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: "14px",
                                marginRight: "8px",
                                marginTop: "3px",
                              }}
                            >
                              {data.temp}°
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                    <Divider
                      flexItem={1}
                      sx={{
                        color: "#fff",
                        marginRight: "4px",
                        marginTop: "22px",
                        marginBottom: "20px",
                        backgroundColor: "#fff",
                        opacity: "0.8",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                        marginTop: "12px",
                      }}
                    >
                      {temDataTime2.slice(0, 5).map((data, index) => (
                        <Box key={index}>
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "14px",
                              marginRight: "8px",
                              marginTop: "3px",
                            }}
                          >
                            {data.time}
                          </Typography>
                          <Box style={{ display: "flex" }}>
                            <WbCloudyIcon
                              sx={{
                                fontSize: "20px",
                                color: "#fff",
                                paddingTop: "0px",
                                marginTop: "3px",
                                marginRight: "3px",
                              }}
                            />
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: "14px",
                                marginRight: "8px",
                                marginTop: "3px",
                              }}
                            >
                              {data.temp}°
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box style={{ width: "500px" }}>
                <Typography
                  style={{ fontSize: "18px", fontWeight: 600, color: "white" }}
                >
                  Random Text
                </Typography>
                <Typography
                  style={{ fontSize: "15px", fontWeight: 500, color: "white" }}
                >
                  Improve him believe opinion offered met and end cheered
                  forbade. Friendly as stronger speedily by recurred. Son
                  interest wandered sir addition end say. Manners beloved
                  affixed picture men ask.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Weather;
