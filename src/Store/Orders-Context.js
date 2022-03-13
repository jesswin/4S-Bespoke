import React from "react";
const OrderContext = React.createContext({
  getCustInfo: () => {},
  liftState: () => {},
  getOrderData: () => {},
  clear: () => {},
  start: () => {},
  stop: () => {},
  data: {},
  loading: false,
});
export default OrderContext;
