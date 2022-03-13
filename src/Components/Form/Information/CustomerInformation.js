import Input from "../Input/Input";
import Grid from "@mui/material/Grid";
import { CUSTOMER_DATA } from "../../../Data/EnglishData";
import { Button } from "@mui/material";
import { useContext, useRef, useState } from "react";
import OrderContext from "../../../Store/Orders-Context";

const CustomerInformation = (props) => {
  const inputRef = useRef();
  const [images, setImages] = useState([]);
  const [rawImages, setRawImages] = useState([]);
  const orderCtx = useContext(OrderContext);

  function previewFile() {
    let imgUrlArray = [];

    if (inputRef.current.files) {
      for (let i = 0; i < inputRef.current.files.length; i++) {
        imgUrlArray.push(URL.createObjectURL(inputRef.current.files[i]));
      }
      console.log(imgUrlArray);
      setImages(imgUrlArray);
      setRawImages(inputRef.current.files);
      orderCtx.liftState("images", rawImages, "custInfo");
    }
  }

  return (
    <form onSubmit={props.onNext}>
      <fieldset>
        <legend>Customer Information</legend>
        <Grid container spacing={1}>
          {CUSTOMER_DATA.map((element) => (
            <Grid key={element.text} item xs={3}>
              {props.data ? (
                <Input
                  required={element.required}
                  inputType={element.inputType}
                  dataAbout="custInfo"
                  data={element}
                  value={props.data[element.text]}
                />
              ) : (
                <Input
                  required={element.required}
                  inputType={element.inputType}
                  dataAbout="custInfo"
                  data={element}
                />
              )}
            </Grid>
          ))}
          {props.from !== "Fetch" && (
            <>
              <Grid key="img" item xs={3}>
                <input
                  ref={inputRef}
                  onChange={previewFile}
                  style={{ margin: "20px" }}
                  type="file"
                  accept="image/*"
                  multiple
                />
                 
              </Grid>
              {images &&
                images.map((img) => {
                  return (
                    <Grid key={img} item xs={3}>
                      <img
                        style={{ objectFit: "cover" }}
                        height="100px"
                        width="100px"
                        alt="Body Measurement"
                        src={img}
                      ></img>
                    </Grid>
                  );
                })}
            </>
          )}
        </Grid>
      </fieldset>
      <Button variant="contained" type="submit" sx={{ m: 2 }}>
        Next
      </Button>
    </form>
  );
};

export default CustomerInformation;
