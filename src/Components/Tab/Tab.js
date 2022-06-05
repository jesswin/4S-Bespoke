import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Form from "../Form/Form";
import FetchData from "../Form/Fetch/FetchData";
import AllData from "../Form/AllData/AllData";

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
            <Tab label="All Orders" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Form from="Tab" />
        </TabPanel>
        <TabPanel value="2">
          <FetchData />
        </TabPanel>
        <TabPanel value="3">
          <AllData />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default OrderTabs;
