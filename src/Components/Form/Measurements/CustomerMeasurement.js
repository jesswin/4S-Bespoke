import { BODY_MEASUREMENTS } from "../../../Data/EnglishData";
import Grid from "@mui/material/Grid";

import Input from "../Input/Input";
const CustomerMeasurement = (props) => {
  return (
    <form>
      <fieldset>
        <legend>Body Measurements</legend>
        <Grid container spacing={1}>
          {BODY_MEASUREMENTS.map((element) => (
            <Grid key={element} item xs={3}>
              {props.data ? (
                <Input
                  required={false}
                  data={element}
                  dataAbout={props.about}
                  value={props.data[element]}
                />
              ) : (
                <Input
                  required={false}
                  data={element}
                  dataAbout={props.about}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </fieldset>
    </form>
  );
};
export default CustomerMeasurement;
