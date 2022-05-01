import { VEST_STYLE } from "../../../Data/EnglishData";
import Grid from "@mui/material/Grid";

import Input from "../Input/Input";
import CustomSelect from "../CustomSelect/CustomSelect";

const Vest = (props) => {
  let arr = [];
  for (let i = 1; i <= props.vests; i++) {
    arr.push(i);
  }
  console.log(props.Jackets);
  return (
    <form>
      <fieldset>
        <legend>Vest Style</legend>
        <Grid container spacing={1}>
          {VEST_STYLE.map((element) =>
            element.type === "input" ? (
              <Grid key={element.text} item xs={3}>
                {props.data ? (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="vestInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="vestInfo"
                    data={element}
                    ind={props.ind}
                  />
                )}
              </Grid>
            ) : (
              <Grid key={element.text} item xs={2}>
                {props.data ? (
                  <CustomSelect
                    options={arr}
                    dataAbout="vestInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <CustomSelect
                    options={arr}
                    dataAbout="vestInfo"
                    data={element}
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
export default Vest;
