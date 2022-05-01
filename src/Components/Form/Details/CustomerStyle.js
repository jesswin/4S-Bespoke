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

const CustomerStyle = (props) => {
  const [data, setData] = useState();
  const [mainObj, setMainObj] = useState({});

  const orderCtx = useContext(OrdersContext);
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
    // setShirtState(shirts);
    return shirts;
  };

  const getJacket = () => {
    console.log("FUCK JHACKKKKKK");
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

  // window.onpopstate = (e) => {
  //   let x =   window.confirm ("Information will be lost");
  // };

  return (
    <>
      <Prompt
        when={data}
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
      </Box>
    </>
  );
};

export default CustomerStyle;
