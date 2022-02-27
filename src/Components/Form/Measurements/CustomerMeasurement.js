import { BODY_MEASUREMENTS } from "../../../Data/EnglishData";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Input from "../Input/Input";
import { useContext } from "react";
import OrderContext from "../../../Store/Orders-Context";

const CustomerMeasurement = (props) => {
  let orderCtx = useContext(OrderContext);
  // const [loading, setLoading] = useState(false);

  const submitData = async (event) => {
    event.preventDefault();
    let data = orderCtx.getCustInfo();

    try {
      // setLoading(true);
      orderCtx.start();
      let res = await fetch(
        `https://sbespoke-48c4a-default-rtdb.firebaseio.com/orders/${data.custInfo.Order}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      // setLoading(false);
      orderCtx.clear();
      props.from === "Fetch" && props.clearLocal();
      orderCtx.stop();
    } catch (err) {
      console.log(err);
      alert(err.message);
      // setLoading(false);
      orderCtx.stop();
    }
    props.from !== "Fetch" && props.lockForm();
    props.from !== "Fetch" && props.lockForm2();
  };

  return (
    <form onSubmit={submitData}>
      <fieldset>
        <legend>Customer Measurements</legend>
        <Grid container spacing={1}>
          {BODY_MEASUREMENTS.map((element) => (
            <Grid key={element} item xs={3}>
              {props.data ? (
                <Input
                  required={false}
                  data={element}
                  dataAbout="sizeInfo"
                  value={props.data[element]}
                />
              ) : (
                <Input required={false} data={element} dataAbout="sizeInfo" />
              )}
            </Grid>
          ))}
        </Grid>
      </fieldset>
      <Button variant="contained" type="submit" sx={{ m: 2 }}>
        Submit
      </Button>
    </form>
  );
};
export default CustomerMeasurement;
