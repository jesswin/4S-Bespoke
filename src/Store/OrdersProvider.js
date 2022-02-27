import OrderContext from "./Orders-Context";
import { useState } from "react";

const OrderContextProvider = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [fullData, setFullData] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  let custInfo = {};
  let prodInfo = {};
  let sizeInfo = {};
  let fullData2 = {};

  const storeCustData = () => {
    fullData2 = { custInfo, prodInfo, sizeInfo };
    setFullData(fullData2);
    return fullData2;
  };

  const transferData = (field, value, dataAbout) => {
    if (dataAbout === "custInfo") {
      custInfo[field] = value;
    }
    if (dataAbout === "prodInfo") {
      console.log(value);
      prodInfo[field] = value;
    }
    if (dataAbout === "sizeInfo") {
      sizeInfo[field] = value;
    }
    console.log(custInfo);
    console.log(prodInfo);
    console.log(sizeInfo);
  };

  const clearData = () => {
    console.log("clear");
    custInfo = {};
    prodInfo = {};
    sizeInfo = {};
    fullData2 = {};
    setFullData({});
    console.log(fullData2);
  };

  const fetchOrder = async (orderId) => {
    // console.log(orderId);
    try {
      let res = await fetch(
        `https://sbespoke-48c4a-default-rtdb.firebaseio.com/orders/${orderId}.json`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      let data = await res.json();
      console.log("FUKKK");
      console.log(data);
      if (!data) {
        throw new Error("No Orders Found!");
      }
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
    loading: formLoading,
  };

  return (
    <OrderContext.Provider value={contextData}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;