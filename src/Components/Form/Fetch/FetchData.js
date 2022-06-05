import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import OrderContext from "../../../Store/Orders-Context";
import Form from "../Form";
// import { Link } from "react-router-dom";

const FetchData = (props) => {
  const orderCtx = useContext(OrderContext);
  const inputRef = useRef();
  const [showFrom, setShowForm] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [showFinshData, setShowFinishData] = useState(false);

  const clearData = () => {
    setData({});
  };

  const getData = async (event) => {
    console.log("GET");
    event.preventDefault();
    orderCtx.clear();
    setData({});
    setLoading(true);
    let fetchedData = await orderCtx.getOrderData(inputRef.current.value);
    if (fetchedData) {
      localStorage.setItem("userData", JSON.stringify(fetchedData));
      setData(fetchedData);
      setShowFinishData(true);
      setShowForm(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  console.log("FECTH");

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <form onSubmit={getData}>
          <fieldset>
            <legend>Fetch Order</legend>
            <Box
              sx={{
                m: 1,
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <TextField
                    required
                    type={props.inputType}
                    id="outlined-basic"
                    label="Order"
                    variant="outlined"
                    inputRef={inputRef}
                  />
                </Grid>
                <Button variant="contained" type="submit" sx={{ m: 2 }}>
                  Fetch
                </Button>
                {showFinshData && (
                  <a href="/tailor-copy" target="_blank">
                    <Button disabled={!data} variant="contained" sx={{ m: 2 }}>
                      Tailor Copy
                    </Button>
                  </a>
                )}
              </Grid>
            </Box>
          </fieldset>
        </form>
      )}
      {showFrom && !loading && (
        <Form clearLocal={clearData} from="Fetch" data={data} />
      )}
    </>
  );
};

export default FetchData;
