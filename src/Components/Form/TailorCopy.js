// import { useContext } from "react";
// import OrderContext from "../../Store/Orders-Context";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const TailorCopy = () => {
  // const orderCtx = useContext(OrderContext);
  // let data = Object.values(orderCtx.data);
  // console.log(data);

  let data = localStorage.getItem("userData");
  data = JSON.parse(data);
  data = Object.values(data);

  let custData = data && Object.values(data)[0]?.custInfo;
  let prodData = data && Object.values(data)[0]?.prodInfo;
  let custSize = data && Object.values(data)[0]?.sizeInfo;
  let custFinishedSize = data && Object.values(data)[0]?.finishedInfo;

  let custShirtInfo = data && Object.values(data)[0]?.shirtInfo;
  let custJacketInfo = data && Object.values(data)[0]?.jacketsInfo;
  let cust3pSuitInfo = data && Object.values(data)[0]?.threePcSuitInfo;
  let custSlackInfo = data && Object.values(data)[0]?.slackInfo;
  let custSuitInfo = data && Object.values(data)[0]?.suitInfo;
  let custTopCoatInfo = data && Object.values(data)[0]?.topCoatInfo;
  let custVestInfo = data && Object.values(data)[0]?.vestInfo;

  const print = () => {
    alert("Select Layout Landscape for better view.");
    window.print();
  };

  return (
    <>
      <Box
        sx={{
          margin: "20px",
        }}
      >
        {custData && (
          <div>
            <h2>Customer Information</h2>

            <Grid container spacing={1}>
              <Grid item xs={3} margin="10px">
                <span style={{ fontSize: "1.3rem" }}>
                  Name - {custData["Name"]}
                </span>
              </Grid>
              {Object.keys(custData).map((el) => {
                return el !== "images"
                  ? el !== "Address" &&
                      el !== "DoB" &&
                      el !== "E-mail" &&
                      el !== "Phone 1" &&
                      el !== "Phone 2" &&
                      el !== "Name" && (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {custData[el]}
                          </span>
                        </Grid>
                      )
                  : custData["images"].map((img) => {
                      return (
                        <Grid key={img} item xs={3}>
                          <img
                            style={{
                              objectFit: "cover",
                              border: "2px solid black",
                              marginLeft: "70px",
                            }}
                            src={img}
                            alt={img}
                            height="100px"
                            width="100px"
                          />
                        </Grid>
                      );
                    });
              })}
            </Grid>
            <hr />
          </div>
        )}
        {prodData && (
          <div>
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
          </div>
        )}
        {custSize && (
          <div>
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
            <hr />
          </div>
        )}
        {custFinishedSize && (
          <div>
            <h2>Finished Measurements</h2>
            <Grid container spacing={1}>
              {custFinishedSize &&
                Object.keys(custFinishedSize).map((el) => {
                  return (
                    <Grid key={el} item xs={3} margin="10px">
                      <span style={{ fontSize: "1.3rem" }}>
                        {el} - {custFinishedSize[el]}
                      </span>
                    </Grid>
                  );
                })}
            </Grid>
            <hr />
          </div>
        )}

        {custShirtInfo &&
          custShirtInfo.map((shirt, ind) => {
            return (
              <div key={ind}>
                <h2>Shirt Style</h2>
                <Grid container spacing={1}>
                  {shirt &&
                    Object.keys(shirt).map((el) => {
                      return (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {shirt[el]}
                          </span>
                        </Grid>
                      );
                    })}
                </Grid>
                <hr />
              </div>
            );
          })}

        {custSlackInfo &&
          custSlackInfo.map((slack, ind) => {
            return (
              <div key={ind}>
                <h2>Slack Style</h2>
                <Grid container spacing={1}>
                  {slack &&
                    Object.keys(slack).map((el) => {
                      return (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {slack[el]}
                          </span>
                        </Grid>
                      );
                    })}
                </Grid>
                <hr />
              </div>
            );
          })}

        {custVestInfo &&
          custVestInfo.map((vest, ind) => {
            return (
              <div key={ind}>
                <h2>Vest Style</h2>
                <Grid container spacing={1}>
                  {vest &&
                    Object.keys(vest).map((el) => {
                      return (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {vest[el]}
                          </span>
                        </Grid>
                      );
                    })}
                </Grid>
                <hr />
              </div>
            );
          })}

        {custJacketInfo &&
          custJacketInfo.map((jacket, ind) => {
            return (
              <div key={ind}>
                <h2>Jacket Style</h2>
                <Grid container spacing={1}>
                  {jacket &&
                    Object.keys(jacket).map((el) => {
                      return (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {jacket[el]}
                          </span>
                        </Grid>
                      );
                    })}
                </Grid>
                <hr />
              </div>
            );
          })}

        {custTopCoatInfo &&
          custTopCoatInfo.map((topCoat, ind) => {
            return (
              <div key={ind}>
                <h2>Top Coat Style</h2>
                <Grid container spacing={1}>
                  {topCoat &&
                    Object.keys(topCoat).map((el) => {
                      return (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {topCoat[el]}
                          </span>
                        </Grid>
                      );
                    })}
                </Grid>
                <hr />
              </div>
            );
          })}

        {custSuitInfo &&
          custSuitInfo.map((suit, ind) => {
            return (
              <div key={ind}>
                <h2>Suit Style</h2>
                <Grid container spacing={1}>
                  {suit &&
                    Object.keys(suit).map((el) => {
                      return (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {suit[el]}
                          </span>
                        </Grid>
                      );
                    })}
                </Grid>
                <hr />
              </div>
            );
          })}

        {cust3pSuitInfo &&
          cust3pSuitInfo.map((threepc, ind) => {
            return (
              <div key={ind}>
                <h2>3 Piece Suit Style</h2>
                <Grid container spacing={1}>
                  {threepc &&
                    Object.keys(threepc).map((el) => {
                      return (
                        <Grid key={el} item xs={3} margin="10px">
                          <span style={{ fontSize: "1.3rem" }}>
                            {el} - {threepc[el]}
                          </span>
                        </Grid>
                      );
                    })}
                </Grid>
                <hr />
              </div>
            );
          })}

        <Button onClick={print} variant="contained" type="submit" sx={{ m: 2 }}>
          Print
        </Button>
      </Box>
    </>
  );
};

export default TailorCopy;
