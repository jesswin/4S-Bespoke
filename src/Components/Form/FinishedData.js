import { useContext } from "react";
import OrderContext from "../../Store/Orders-Context";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const FinishedData = () => {
  const orderCtx = useContext(OrderContext);
  let data = Object.values(orderCtx.data);

  let custData = data && Object.values(data)[0]?.custInfo;
  let prodData = data && Object.values(data)[0]?.prodInfo;
  let custSize = data && Object.values(data)[0]?.sizeInfo;
  console.log(prodData);

  return (
    <>
      <Box
        sx={{
          margin: "20px",
        }}
      >
        <h2>Customer Information</h2>
        <Grid container spacing={1}>
          {Object.keys(custData).map((el) => {
            return el !== "images" ? (
              <Grid key={el} item xs={3} margin="10px">
                <span style={{ fontSize: "1.3rem" }}>
                  {el} - {custData[el]}
                </span>
              </Grid>
            ) : (
              custData["images"].map((img) => {
                return (
                  <Grid key={img} item xs={3}>
                    <img
                      style={{ objectFit: "cover", border: "2px solid black" }}
                      src={img}
                      alt={img}
                      height="100px"
                      width="100px"
                    />
                  </Grid>
                );
              })
            );
          })}
        </Grid>
        <hr />
        <h2>Order Information</h2>
        <Grid container spacing={1}>
          {Object.keys(prodData).map((el) => {
            return (
              <Grid key={el} item xs={3} margin="10px">
                <span style={{ fontSize: "1.3rem" }}>
                  {el} - {prodData[el]}
                </span>
              </Grid>
            );
          })}
        </Grid>
        <hr />
        <h2>Body Measurements</h2>
        <Grid container spacing={1}>
          {custSize &&
            Object.keys(custSize).map((el) => {
              return (
                <Grid key={el} item xs={3} margin="10px">
                  <span style={{ fontSize: "1.3rem" }}>
                    {el} - {custSize[el]}
                  </span>
                </Grid>
              );
            })}
        </Grid>
        <Button variant="contained" type="submit" sx={{ m: 2 }}>
          Print
        </Button>
      </Box>
    </>
  );
};

export default FinishedData;