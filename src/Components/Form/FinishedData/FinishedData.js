import CustomerMeasurement from "../Measurements/CustomerMeasurement";
import { Button } from "@mui/material";
// import { useContext } from "react";
// import OrderContext from "../../../Store/Orders-Context";
// import { storage } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const FinishedData = (props) => {
  const navigate = useNavigate();

  // let orderCtx = useContext(OrderContext);
  // const submit = async (event) => {
  //   event.preventDefault();
  //   let data = orderCtx.getCustInfo();
  //   let imgUrls = [];

  //   try {
  //     orderCtx.start();
  //     if (data.custInfo.images) {
  //       for (let i = 0; i < data.custInfo.images.length; i++) {
  //         const ref = storage.ref(
  //           `/${data.custInfo.Order}/${data.custInfo.images[i].name}${Date()}`
  //         );
  //         await ref.put(data.custInfo.images[i]).then(async () => {
  //           const url = await ref.getDownloadURL();
  //           console.log(url);
  //           imgUrls.push(url);
  //         });
  //       }

  //       data.custInfo.images = [...imgUrls];
  //     }

  //     let res = await fetch(
  //       `https://sbespoke-48c4a-default-rtdb.firebaseio.com/orders/${data.prodInfo.Order}.json`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );
  //     if (!res.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     orderCtx.clear();
  //     props.from === "Fetch" && props.clearLocal();
  //     orderCtx.stop();
  //   } catch (err) {
  //     console.log(err);
  //     alert(err.message);
  //     orderCtx.stop();
  //   }
  //   props.from !== "Fetch" && props.lockForm();
  //   props.from !== "Fetch" && props.lockForm2();
  // };

  const showCustStyle = () => {
    navigate("/customer-styling");
  };
  return (
    <>
      <CustomerMeasurement
        txt="Finished"
        about="finishedInfo"
        data={props.data}
      />
      <Button
        variant="contained"
        type="submit"
        onClick={showCustStyle}
        sx={{ m: 2 }}
      >
        Submit
      </Button>
    </>
  );
};
export default FinishedData;
