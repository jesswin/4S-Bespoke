import CustomerMeasurement from "../Measurements/CustomerMeasurement";
import { Button } from "@mui/material";

import { useHistory } from "react-router-dom";

const FinishedData = (props) => {
  const history = useHistory();
  const showCustStyle = () => {
    history.push("/customer-styling");
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
