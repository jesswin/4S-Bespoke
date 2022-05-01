import {
  JACKET_STYLE,
  SLACK_STYLE,
  VEST_STYLE,
} from "../../../Data/EnglishData";
import Grid from "@mui/material/Grid";

import Input from "../Input/Input";
import CustomSelect from "../CustomSelect/CustomSelect";

const Suits3 = (props) => {
  let arr = [];
  for (let i = 1; i <= props.suits3; i++) {
    arr.push(i);
  }
  console.log(props.suits3);
  return (
    <form>
      <fieldset>
        <legend>3 Piece Suit Style</legend>
        <Grid container spacing={1}>
          <p style={{ margin: "20px" }}> Jacket</p>
          {JACKET_STYLE.map((element) =>
            element.type === "input" ? (
              <Grid key={element.text} item xs={3}>
                {props.data ? (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="3pSuitInfo"
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
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <CustomSelect
                    options={arr}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                  />
                )}
              </Grid>
            )
          )}
        </Grid>
        <hr />
        <Grid container spacing={1}>
          <p style={{ margin: "20px" }}>Slacks</p>
          {SLACK_STYLE.map((element) =>
            element.text !== "Quantity" && element.type === "input" ? (
              <Grid key={element.text} item xs={3}>
                {props.data ? (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                  />
                )}
              </Grid>
            ) : (
              <Grid key={element.text} item xs={2}>
                {element.text !== "Quantity" && props.data ? (
                  <CustomSelect
                    options={arr}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  element.text !== "Quantity" && (
                    <CustomSelect
                      onChange={props.onChange}
                      from="style"
                      options={arr}
                      dataAbout="3pSuitInfo"
                      data={element}
                      ind={props.ind}
                    />
                  )
                )}
              </Grid>
            )
          )}
        </Grid>
        <hr />
        <Grid container spacing={1}>
          <p style={{ margin: "20px" }}>Vest</p>
          {VEST_STYLE.map((element) =>
            element.text !== "Quantity" && element.type === "input" ? (
              <Grid key={element.text} item xs={3}>
                {props.data ? (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                  />
                )}
              </Grid>
            ) : (
              <Grid key={element.text} item xs={2}>
                {element.text !== "Quantity" && props.data ? (
                  <CustomSelect
                    options={arr}
                    dataAbout="3pSuitInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  element.text !== "Quantity" && (
                    <CustomSelect
                      onChange={props.onChange}
                      from="style"
                      options={arr}
                      dataAbout="3pSuitInfo"
                      data={element}
                      ind={props.ind}
                    />
                  )
                )}
              </Grid>
            )
          )}
        </Grid>
      </fieldset>
    </form>
  );
};
export default Suits3;
