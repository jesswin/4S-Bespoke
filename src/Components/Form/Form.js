import React from "react";
import Box from "@mui/material/Box";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../Store/Orders-Context";
import CustomerMeasurement from "./Measurements/CustomerMeasurement";
import CustomerInformation from "./Information/CustomerInformation";
import ProductsBought from "./Products/ProductsBought";
import CircularProgress from "@mui/material/CircularProgress";

const Form = (props) => {
  const [changeForm, setchangeForm] = useState(false);
  const [changeForm2, setchangeForm2] = useState(false);

  let orderCtx = useContext(OrderContext);

  useEffect(() => {
    props.from !== "Fetch" && orderCtx.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let custData = props.data && Object.values(props.data)[0]?.custInfo;
  let prodData = props.data && Object.values(props.data)[0]?.prodInfo;
  let custSize = props.data && Object.values(props.data)[0]?.sizeInfo;

  console.log("FORMMM DATA");
  console.log(custData);

  const unlockForm = (event) => {
    event.preventDefault();
    setchangeForm(true);
  };
  const unlockForm2 = (event) => {
    event.preventDefault();
    setchangeForm2(true);
  };

  const lockForm = () => {
    setchangeForm(false);
  };
  const lockForm2 = () => {
    setchangeForm2(false);
  };

  const preventDef = (event) => {
    event.preventDefault();
  };
  console.log(orderCtx.loading);

  return orderCtx.loading ? (
    <CircularProgress />
  ) : (
    <Box
      sx={{
        m: 2,
        flexGrow: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <CustomerInformation
        from={props.from}
        onNext={props.from === "Fetch" ? preventDef : unlockForm}
        data={custData}
      />
      {props.from === "Fetch" ? (
        <ProductsBought onNext={preventDef} data={prodData} />
      ) : (
        changeForm && <ProductsBought onNext={unlockForm2} />
      )}
      {props.from === "Fetch" ? (
        <CustomerMeasurement
          data={custSize}
          from="Fetch"
          clearLocal={props.clearLocal}
        />
      ) : (
        changeForm2 && (
          <CustomerMeasurement lockForm={lockForm} lockForm2={lockForm2} />
        )
      )}
    </Box>
  );
};
export default Form;
