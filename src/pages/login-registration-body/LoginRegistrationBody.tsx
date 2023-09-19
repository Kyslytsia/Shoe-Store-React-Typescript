import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Login from "./login/Login";
import Registration from "./registration/Registration";

import "./LoginRegistrationBody.css";

const CastomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#2b2f4c",
  },
});

const CastomBox = styled(Box)({});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function LoginRegistrationBody() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="RegistrationBody">
      <CastomBox className="log-registr-body">
        <Box sx={{ borderBottom: 1, borderColor: "#d1d5d5" }}>
          <CastomTabs
            value={value}
            onChange={handleChange}
            aria-label="castom example"
          >
            <Tab
              disableRipple
              style={{ color: "#d1d5d5" }}
              label="LOGIN"
              {...a11yProps(0)}
            />
            <Tab
              disableRipple
              style={{
                color: "#d1d5d5",
              }}
              label="REGISTRASION"
              {...a11yProps(1)}
            />
          </CastomTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Registration />
        </TabPanel>
      </CastomBox>
    </div>
  );
}

export default LoginRegistrationBody;
