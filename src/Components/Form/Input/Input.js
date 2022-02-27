import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useContext } from "react";
import OrderContext from "../../../Store/Orders-Context";
const Input = (props) => {
  let orderCtx = useContext(OrderContext);
  const [val, setVal] = useState("");

  useEffect(() => {
    if (props.value) {
      orderCtx.liftState(
        props.dataAbout === "sizeInfo"
          ? props.data
          : props.data.text
          ? props.data.text
          : props.text,
        props.value,
        props.dataAbout
      );
      setVal(props.value);
    }
  }, [
    props.value,
    orderCtx,
    props.data,
    props.data.text,
    props.text,
    props.dataAbout,
  ]);

  // console.log(props.value);
  
  const handleOnChange = (event) => {
    setVal(event.target.value);
    console.log(val);

    orderCtx.liftState(
      props.dataAbout === "sizeInfo"
        ? props.data
        : props.data.text
        ? props.data.text
        : props.text,
      event.target.value,
      props.dataAbout
    );
  };
  return (
    <Box
      sx={{
        m: 1,
      }}
    >
      <TextField
        required={props.required}
        fullWidth
        onChange={handleOnChange}
        type={props.inputType}
        id="outlined-basic"
        value={val}
        label={
          props.data.text
            ? props.inputType === "date"
              ? ""
              : props.data.text
            : props.data
        }
        variant="outlined"
      />
    </Box>
  );
};

export default Input;
