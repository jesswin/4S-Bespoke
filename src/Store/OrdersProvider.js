import OrderContext from "./Orders-Context";
import { useState } from "react";
import React from "react";

const OrderContextProvider = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [fullData, setFullData] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState();

  let custInfo = {};
  let prodInfo = {};
  let sizeInfo = {};
  let finishedInfo = {};

  let threePcSuitInfo = {};
  let threePcSuitArray = [];

  let jacketsInfo = {};
  let jacketArray = [];

  let shirtInfo = {};
  let shirtArray = [];

  let slackInfo = {};
  let slackArray = [];

  let suitInfo = {};
  let suitArray = [];

  let topCoatInfo = {};
  let topCoatArray = [];

  let vestInfo = {};
  let vestArray = [];

  let fullData2 = {};

  const storeCustData = () => {
    fullData2 = {
      custInfo: { ...custInfo },
      prodInfo: { ...prodInfo },
      sizeInfo: { ...sizeInfo },
      finishedInfo: { ...finishedInfo },
      threePcSuitInfo: [ ...threePcSuitArray ],
      jacketsInfo: [...jacketArray],
      shirtInfo: [...shirtArray],
      slackInfo: [...slackArray],
      suitInfo: [...suitArray],
      topCoatInfo: [...topCoatArray],
      vestInfo: [...vestArray],
    };
    // setFullData(fullData2);
    return fullData2;
  };

  const transferData = (field, value, dataAbout, ind) => {
    console.log(ind);
    if (dataAbout === "custInfo") {
      custInfo[field] = value;
      console.log(custInfo);
    }
    if (dataAbout === "prodInfo") {
      // console.log(value);
      prodInfo[field] = value;
      console.log(prodInfo);
    }
    if (dataAbout === "sizeInfo") {
      sizeInfo[field] = value;
      console.log(sizeInfo);
    }
    if (dataAbout === "finishedInfo") {
      finishedInfo[field] = value;
      console.log(finishedInfo);
    }
    if (dataAbout === "3pSuitInfo") {
      if (!threePcSuitArray[ind]) {
        threePcSuitInfo = {};
        threePcSuitInfo[field] = value;
        threePcSuitArray[ind] = threePcSuitInfo;
        console.log(threePcSuitArray);
      } else if (threePcSuitArray[ind]) {
        threePcSuitArray[ind][field] = value;
        console.log(threePcSuitArray);
      }
    }
    if (dataAbout === "jacketInfo") {
      if (!jacketArray[ind]) {
        jacketsInfo = {};
        jacketsInfo[field] = value;
        jacketArray[ind] = jacketsInfo;
        console.log(jacketArray);
      } else if (jacketArray[ind]) {
        jacketArray[ind][field] = value;
        console.log(jacketArray);
      }
    }
    if (dataAbout === "shirtInfo") {
      if (!shirtArray[ind]) {
        shirtInfo = {};
        shirtInfo[field] = value;
        shirtArray[ind] = shirtInfo;
        console.log(shirtArray);
      } else if (shirtArray[ind]) {
        shirtArray[ind][field] = value;
        console.log(shirtArray);
      }
    }
    if (dataAbout === "slackInfo") {
      if (!slackArray[ind]) {
        slackInfo = {};
        slackInfo[field] = value;
        slackArray[ind] = slackInfo;
        console.log(slackArray);
      } else if (slackArray[ind]) {
        slackArray[ind][field] = value;
        console.log(slackArray);
      }
    }
    if (dataAbout === "suitInfo") {
      if (!suitArray[ind]) {
        suitInfo = {};
        suitInfo[field] = value;
        suitArray[ind] = suitInfo;
        console.log(suitArray);
      } else if (suitArray[ind]) {
        suitArray[ind][field] = value;
        console.log(suitArray);
      }
    }
    if (dataAbout === "topCoatInfo") {
      if (!topCoatArray[ind]) {
        topCoatInfo = {};
        topCoatInfo[field] = value;
        topCoatArray[ind] = topCoatInfo;
        console.log(topCoatArray);
      } else if (topCoatArray[ind]) {
        topCoatArray[ind][field] = value;
        console.log(topCoatArray);
      }
    }
    if (dataAbout === "vestInfo") {
      if (!vestArray[ind]) {
        vestInfo = {};
        vestInfo[field] = value;
        vestArray[ind] = vestInfo;
        console.log(vestArray);
      } else if (vestArray[ind]) {
        vestArray[ind][field] = value;
        console.log(vestArray);
      }
    }
  };

  const clearData = () => {
    console.log("clear");
    custInfo = {};
    prodInfo = {};
    sizeInfo = {};
    threePcSuitInfo = {};
    threePcSuitArray = [];

    jacketsInfo = {};
    jacketArray = [];

    shirtInfo = {};
    shirtArray = [];

    slackInfo = {};
    slackArray = [];

    suitInfo = {};
    suitArray = [];

    topCoatInfo = {};
    topCoatArray = [];

    vestInfo = {};
    vestArray = [];

    fullData2 = {};
    setFullData({});
    setFetchedData({});
    console.log(fullData2);
  };

  const fetchOrder = async (orderId) => {
    try {
      let res = await fetch(
        `https://sbespoke-48c4a-default-rtdb.firebaseio.com/orders/${orderId}.json`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      let data = await res.json();
      console.log(data);
      if (!data) {
        throw new Error("No Orders Found!");
      }
      setFetchedData(data);
      return data;
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  function startLoading() {
    setFormLoading(true);
  }

  function stopLoading() {
    setFormLoading(false);
  }
  let contextData = {
    getCustInfo: storeCustData,
    liftState: transferData,
    getOrderData: fetchOrder,
    clear: clearData,
    start: startLoading,
    stop: stopLoading,
    data: fetchedData,
    loading: formLoading,
  };

  return (
    <OrderContext.Provider value={contextData}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
