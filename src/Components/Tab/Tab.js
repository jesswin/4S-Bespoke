import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Form from "../Form/Form";
import FetchData from "../Form/Fetch/FetchData";
import CustomerStyle from "../Form/Details/CustomerStyle";

const OrderTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList sx={{ margin: "0 20px" }} onChange={handleChange}>
            <Tab label="New Order" value="1" />
            <Tab label="Fetch Order" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {/* <CustomerStyle /> */}
          <Form from="Tab" />
        </TabPanel>
        <TabPanel value="2">
          <FetchData />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default OrderTabs;
