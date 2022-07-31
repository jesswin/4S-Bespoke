import { SHIRT_STYLE } from "../../../Data/EnglishData";
import Grid from "@mui/material/Grid";

import Input from "../Input/Input";
import CustomSelect from "../CustomSelect/CustomSelect";

const Shirt = (props) => {
  let arr = [];
  for (let i = 1; i <= props.shirts; i++) {
    arr.push(i);
  }
  console.log(SHIRT_STYLE);
  return (
    <form>
      <fieldset>
        <legend>Shirt Style</legend>
        <Grid container spacing={1}>
          {SHIRT_STYLE.map((element) =>
            element.type === "input" ? (
              <Grid key={element.text} item xs={3}>
                {props.data ? (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="shirtInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="shirtInfo"
                    data={element}
                    ind={props.ind}
                  />
                )}
              </Grid>
            ) : (
              <Grid key={element.text} item xs={2}>

                {props.data ? element.text=="Quantity"?(
                  <CustomSelect
                    options={arr}
                    dataAbout="shirtInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ):(
                  <CustomSelect
                    options={element.options}
                    dataAbout="shirtInfo"
                    data={element}
                    ind={props.ind}
                    widthBig={true} 
                    value={props.data[element.text]}
                  />
                )
                 :element.text=="Quantity"?<CustomSelect
                options={arr}
                dataAbout="shirtInfo"
                data={element}
                ind={props.ind}
              />:(
                  <CustomSelect
                    options={element.options}
                    dataAbout="shirtInfo"
                    data={element}
                    widthBig={true} 
                    ind={props.ind}
                  />
                )}
              </Grid>
            )
          )}
        </Grid>
      </fieldset>
    </form>
  );
};
export default Shirt;
