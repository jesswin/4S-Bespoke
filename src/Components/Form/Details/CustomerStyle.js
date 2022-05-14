/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import OrdersContext from "../../../Store/Orders-Context";
import CustomSelect from "../CustomSelect/CustomSelect";
import { OPTIONS } from "../../../Data/EnglishData";
import Shirt from "./Shirts";
import Jacket from "./Jackets";
import Slacks from "./Slacks";
import TopCoat from "./TopCoat";
import Vest from "./Vest";
import Suits from "./Suits";
import Suits3 from "./3PSuits";
import { Button } from "@mui/material";
import { storage } from "../../../firebase/firebase";
import CircularProgress from "@mui/material/CircularProgress";
import { useHistory } from "react-router-dom";

const CustomerStyle = (props) => {
  const [data, setData] = useState();
  const [mainObj, setMainObj] = useState({});
  const [goBack, setGoBack] = useState(false);

  const orderCtx = useContext(OrdersContext);

  const history = useHistory();

  // let orderCtx = useContext(OrderContext);
  const onSubmit = async (event) => {
    event.preventDefault();
    let data = orderCtx.getCustInfo();
    let imgUrls = [];
    let filteredData = {};
    for (let key in data) {
      if (data[key]) {
        filteredData[key] = data[key];
      }
    }
    console.log(filteredData);

    try {
      orderCtx.start();
      if (data.custInfo.images) {
        for (let i = 0; i < data.custInfo.images.length; i++) {
          const ref = storage.ref(
            `/${data.custInfo.Order}/${data.custInfo.images[i].name}${Date()}`
          );
          await ref.put(data.custInfo.images[i]).then(async () => {
            const url = await ref.getDownloadURL();
            console.log(url);
            imgUrls.push(url);
          });
        }

        data.custInfo.images = [...imgUrls];
      }

      let res = await fetch(
        `https://sbespoke-48c4a-default-rtdb.firebaseio.com/orders/${data.prodInfo.Order}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filteredData),
        }
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      orderCtx.clear();
      props.from === "Fetch" && props.clearLocal();
      orderCtx.stop();
      setGoBack(true);
      history.replace("/");
    } catch (err) {
      console.log(err);
      alert(err.message);
      orderCtx.stop();
    }
  };

  let obj = {};
  const onChangeHandler = (field, value) => {
    console.log(value);
    obj = { ...mainObj };
    obj[field] = value;
    console.log(obj);
    setMainObj(obj);
  };

  const getShirts = () => {
    console.log("FUCK SHITTTT");
    let shirts = [];
    for (let key in mainObj) {
      console.log(mainObj);
      if (key === "Shirts") {
        console.log("JESSI");
        for (let i = 0; i < mainObj[key]; i++) {
          shirts.push(<Shirt ind={i} shirts={data?.prodInfo.Shirts} />);
        }
      }
    }
    console.log(shirts);
    return shirts;
  };

  const getJacket = () => {
    let jacket = [];
    for (let key in mainObj) {
      console.log(data?.prodInfo);
      if (key === "Jacket") {
        for (let i = 0; i < mainObj[key]; i++) {
          console.log(i);
          jacket.push(<Jacket ind={i} jackets={data?.prodInfo.Jacket} />);
        }
      }
    }
    console.log(jacket);
    // setJacketState(jacket);
    return jacket;
  };

  const getSlacks = () => {
    console.log("FUCK Slack");
    let slack = [];
    for (let key in mainObj) {
      console.log(data?.prodInfo);
      if (key === "Slacks") {
        for (let i = 0; i < mainObj[key]; i++) {
          slack.push(<Slacks ind={i} slack={data?.prodInfo.Slacks} />);
        }
      }
    }
    console.log(slack);
    // setJacketState(jacket);
    return slack;
  };

  const getTopCoat = () => {
    console.log("FUCK TOPCOAT");
    let topCoat = [];
    for (let key in mainObj) {
      console.log(data?.prodInfo);
      if (key === "TopCoat") {
        for (let i = 0; i < mainObj[key]; i++) {
          topCoat.push(<TopCoat ind={i} topCoat={data?.prodInfo.TopCoat} />);
        }
      }
    }
    console.log(topCoat);
    // setJacketState(jacket);
    return topCoat;
  };

  const getVest = () => {
    console.log("FUCK Vest");
    let vests = [];
    for (let key in mainObj) {
      console.log(data?.prodInfo);
      if (key === "Vest") {
        for (let i = 0; i < mainObj[key]; i++) {
          vests.push(<Vest ind={i} vests={data?.prodInfo.Vest} />);
        }
      }
    }
    console.log(vests);
    // setJacketState(jacket);
    return vests;
  };

  const getSuit = () => {
    console.log("FUCK Suit");
    let suits = [];
    for (let key in mainObj) {
      console.log(data?.prodInfo);
      if (key === "Suits") {
        for (let i = 0; i < mainObj[key]; i++) {
          suits.push(<Suits ind={i} suits={data?.prodInfo.Suits} />);
        }
      }
    }
    console.log(suits);
    // setJacketState(jacket);
    return suits;
  };

  const get3Suit = () => {
    console.log("FUCK 3 Suit");
    let suits3 = [];
    for (let key in mainObj) {
      console.log(data?.prodInfo);
      if (key === "3 Piece Suits") {
        for (let i = 0; i < mainObj[key]; i++) {
          suits3.push(
            <Suits3 ind={i} suits3={data?.prodInfo["3 Piece Suits"]} />
          );
        }
      }
    }
    console.log(suits3);
    // setJacketState(jacket);
    return suits3;
  };

  const getData = () => {
    console.log(data?.prodInfo);
    data && console.log(Object.keys(data?.prodInfo));
    let dummy = data && [...Object.keys(data?.prodInfo)];
    let dummy2 = [];
    for (let i = 0; i < dummy?.length; i++) {
      console.log(dummy[i]);
      if (dummy[i] !== "Date of Order" && dummy[i] !== "Order") {
        dummy2.push(dummy[i]);
        console.log(dummy2);
      }
    }
    // setData(dummy2);
    let arr =
      dummy2 &&
      dummy2.map((el) => {
        return (
          <CustomSelect
            key={el}
            onChange={onChangeHandler}
            field={el}
            from="style"
            options={OPTIONS}
            dataAbout="prodInfo"
            data={el}
            value={el && 0}
          />
        );
      });
    return arr;
  };

  useEffect(() => {
    let userData = orderCtx.getCustInfo();
    console.log(userData);
    setData(userData);
  }, []);

  return orderCtx.loading ? (
    <CircularProgress />
  ) : (
    <>
      <Prompt
        when={data && !goBack}
        message={() => "You may lose the data entered in below fields"}
      />
      <Box
        sx={{
          m: 2,
          flexGrow: 1,
        }}
        noValidate
        autoComplete="off"
      >
        {getData()}

        {mainObj && getShirts()}
        <div style={{ margin: "50px" }}></div>
        {mainObj && getJacket()}
        <div style={{ margin: "50px" }}></div>
        {mainObj && getSlacks()}
        <div style={{ margin: "50px" }}></div>
        {mainObj && getTopCoat()}
        <div style={{ margin: "50px" }}></div>
        {mainObj && getVest()}
        <div style={{ margin: "50px" }}></div>
        {mainObj && getSuit()}
        <div style={{ margin: "50px" }}></div>
        {mainObj && get3Suit()}
        <div style={{ margin: "50px" }}></div>
        {mainObj && (
          <Button
            onClick={onSubmit}
            variant="contained"
            type="submit"
            sx={{ m: 2 }}
          >
            Submit
          </Button>
        )}
      </Box>
    </>
  );
};

export default CustomerStyle;
