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
  let fullData2 = {};

  const storeCustData = () => {
    fullData2 = { custInfo, prodInfo, sizeInfo, finishedInfo };
    setFullData(fullData2);
    return fullData2;
  };

  const transferData = (field, value, dataAbout) => {
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
  };

  const clearData = () => {
    console.log("clear");
    custInfo = {};
    prodInfo = {};
    sizeInfo = {};
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
