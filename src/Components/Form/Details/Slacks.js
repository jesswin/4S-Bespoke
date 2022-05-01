import { SLACK_STYLE } from "../../../Data/EnglishData";
import Grid from "@mui/material/Grid";

import Input from "../Input/Input";
import CustomSelect from "../CustomSelect/CustomSelect";

const Slacks = (props) => {
  let arr = [];
  for (let i = 1; i <= props.slack; i++) {
    arr.push(i);
  }
  console.log(props.slack);
  return (
    <form>
      <fieldset>
        <legend>Slack Style</legend>
        <Grid container spacing={1}>
          {SLACK_STYLE.map((element) =>
            element.type === "input" ? (
              <Grid key={element.text} item xs={3}>
                {props.data ? (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="slackInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="slackInfo"
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
                    dataAbout="slackInfo"
                    data={element}
                    ind={props.ind}
                    value={props.data[element.text]}
                  />
                ) : (
                  <CustomSelect
                    options={arr}
                    dataAbout="slackInfo"
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
export default Slacks;
