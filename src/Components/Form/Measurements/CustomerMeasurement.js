import { BODY_MEASUREMENTS } from "../../../Data/EnglishData";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Input from "../Input/Input";
import { useContext } from "react";
import OrderContext from "../../../Store/Orders-Context";
import { storage } from "../../../firebase/firebase";

const CustomerMeasurement = (props) => {
  let orderCtx = useContext(OrderContext);

  const submitData = async (event) => {
    event.preventDefault();
    let data = orderCtx.getCustInfo();
    let imgUrls = [];

    try {
      orderCtx.start();
      if (data.custInfo.images) {
        for (let i = 0; i < data.custInfo.images.length; i++) {
          const ref = storage.ref(
            `/${data.custInfo.Order}/${data.custInfo.images[i].name}${Date()}`
          );
          await ref.put(data.custInfo.images[i]).then(async () => {
            const url = await ref.getDownloadURL();
            console.log(url);
            imgUrls.push(url);
          });
        }

        data.custInfo.images = [...imgUrls];
      }

      let res = await fetch(
        `https://sbespoke-48c4a-default-rtdb.firebaseio.com/orders/${data.prodInfo.Order}.json`,
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
      orderCtx.clear();
      props.from === "Fetch" && props.clearLocal();
      orderCtx.stop();
    } catch (err) {
      console.log(err);
      alert(err.message);
      orderCtx.stop();
    }
    props.from !== "Fetch" && props.lockForm();
    props.from !== "Fetch" && props.lockForm2();
  };

  return (
    <form onSubmit={submitData}>
      <fieldset>
        <legend>Body Measurements</legend>
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
