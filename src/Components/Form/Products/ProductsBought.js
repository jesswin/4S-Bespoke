import Input from "../Input/Input";
import CustomSelect from "../CustomSelect/CustomSelect";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { PRODUCTS } from "../../../Data/EnglishData";
import { OPTIONS } from "../../../Data/EnglishData";

const ProductsBought = (props) => {
  return (
    <form onSubmit={props.onNext}>
      <fieldset>
        <legend>Order Information</legend>
        <Grid container spacing={1}>
          {PRODUCTS.map((element) =>
            element.type === "input" ? (
              <Grid key={element.text} item xs={2}>
                {props.data ? (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="prodInfo"
                    data={element}
                    value={props.data[element.text]}
                  />
                ) : (
                  <Input
                    required={element.required}
                    inputType={element.inputType}
                    dataAbout="prodInfo"
                    data={element}
                  />
                )}
              </Grid>
            ) : (
              <Grid key={element.text} item xs={2}>
                {props.data ? (
                  <CustomSelect
                    options={OPTIONS}
                    dataAbout="prodInfo"
                    data={element}
                    value={props.data[element.text]}
                  />
                ) : (
                  <CustomSelect
                    options={OPTIONS}
                    dataAbout="prodInfo"
                    data={element}
                  />
                )}
              </Grid>
            )
          )}
        </Grid>
      </fieldset>
      <Button variant="contained" type="submit" sx={{ m: 2 }}>
        Next
      </Button>
    </form>
  );
};
export default ProductsBought;
