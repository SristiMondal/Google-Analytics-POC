import React from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Rating from "../../assets/images/rating.png";
import Loader from "../../Components/Loader";
import ReactGA from "react-ga";
// import introJs from "intro.js";
import { Steps, Hints } from "intro.js-react";
import "intro.js/introjs.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Product = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [stepsEnabled, setStepsEnabled] = React.useState(true);
  const [steps, setSteps] = React.useState([
    {
      element: ".product",
      intro: "This is product section.",
      position: "right",
      // tooltipClass:""
    },
    // {
    //   element: ".secondline",
    //   intro: "Hello this is your secondline."
    // }
  ]);

  const [initialStep, setInitialStep] = React.useState(0);

  const handleProductSelection = (item) => {
    console.log(item);
    window.alert(item?.title);
    ReactGA.event({
      category: "product",
      action: "clicked on product",
      label: "product page",
      value: item?.id,
    });
  };

  const onExit = () => {
    setStepsEnabled(false);
  };

  const onBeforeExit = () => {
    return false;
  };

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  React.useEffect(() => {
    setLoading(true);
    const res = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  const options = {
    showProgress: true,
    showBullets: true,
    exitOnOverlayClick: true,
    exitOnEsc: true,
    nextLabel: "Next",
    prevLabel: "Prev",
    // skipLabel: 'Skip',
    hidePrev: true,
    doneLabel: "Done",
    overlayOpacity: 0.5,
    overlayColor: "#000",
    showStepNumbers: true,
    keyboardNavigation: true,
    scrollToElement: true,
    helperElementPadding: 10,
    showButtons: true,
  };

  console.log(data, "data");

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
        onBeforeExit={onBeforeExit}
        options={options}
      /> */}
      <Typography
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
          width: "fit-content",
        }}
        className="product"
      >
        Products
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {loading ? (
          <Loader />
        ) : data.length > 0 ? (
          data.map((curr, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Item onClick={() => handleProductSelection(curr)}>
                <img
                  src={curr?.image}
                  style={{ height: "200px", width: "200px" }}
                />

                <Typography
                  sx={{
                    display: "flex",
                    maxHeight: "50px",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "start",
                  }}
                >
                  {curr?.title?.lengh < 50
                    ? curr.title.slice(0, 50)
                    : `${curr.title.slice(0, 50)}...`}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography>Price :</Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      color: "#000000",
                      marginLeft: "5px",
                    }}
                  >{`$${curr?.price}`}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Typography>Ratings :</Typography>
                  <img src={Rating} style={{ width: "20px", height: "20px" }} />
                  <Typography
                    sx={{
                      display: "flex",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    {curr?.rating?.rate}
                  </Typography>
                </Box>
              </Item>
            </Grid>
          ))
        ) : (
          <Typography>No data to show</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Product;
