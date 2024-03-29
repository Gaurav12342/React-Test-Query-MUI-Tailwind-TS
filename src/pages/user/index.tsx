import { FC, useState } from "react";
import { Tabs, Box, Tab, Typography } from "@mui/material";
import comman from "resources/userConstant.json";
import UserListing from "./UserListing";
import CurrentUser from "./CurrentUser";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Home: FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box data-testid="root" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={comman.CURRENT_USER} {...a11yProps(0)} />
          <Tab label={comman.ALL_USER} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <CurrentUser selectTabValue={value}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div data-testid="user-list">
          <UserListing selectTabValue={value} />
        </div>
      </TabPanel>
    </Box>
  );
};

export default Home;
