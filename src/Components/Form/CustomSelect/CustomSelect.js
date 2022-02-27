import Box from "@mui/material/Box";
import { useContext, useState, useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OrderContext from "../../../Store/Orders-Context";

const CustomSelect = (props) => {
  let orderCtx = useContext(OrderContext);
  const [val, setVal] = useState("0");

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

  const handleOnChange = (event) => {
    console.log(event);
    setVal(event.target.value);

    orderCtx.liftState(
      props.data.text ? props.data.text : props.text,
      `${event.target.value}`,
      props.dataAbout
    );
    console.log(val);
  };

  return (
    <Box
      sx={{
        m: 1,
      }}
    >
      <InputLabel id="prod-select-label">
        {props.data.text ? props.data.text : props.data}
      </InputLabel>
      <Select
        id="prod-select"
        sx={{
          width: "5rem",
        }}
        value={val}
        label={props.data.text ? props.data.text : props.data}
        onChange={handleOnChange}
      >
        {props.options.map((el) => {
          return (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};
export default CustomSelect;
