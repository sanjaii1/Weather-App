const styles = () => ({
  weatheHere: {
    "&.MuiBox-root": {
      height: "100vh",
      Margin: "10px",
    },
  },
  weatherBox: {
    "&.MuiBox-root": {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  weatherGrid: {
    "&.MuiGrid-root": {
      justifyContent: "center",
      alignItems: "center",
      margin: "80px",
    },
    weatherCardBox: {
      "&.MuiBox-root": {
        backgroundColor: "#FAE2BD",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        borderRadius: "16.78px",
      },
    },
  },
});

export default styles;
