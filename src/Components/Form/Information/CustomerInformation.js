import Input from "../Input/Input";
import Grid from "@mui/material/Grid";
import { CUSTOMER_DATA } from "../../../Data/EnglishData";
import { Button } from "@mui/material";

const CustomerInformation = (props) => {
  // console.log(props.data);
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
        </Grid>
      </fieldset>
      <Button variant="contained" type="submit" sx={{ m: 2 }}>
        Next
      </Button>
    </form>
  );
};

export default CustomerInformation;
