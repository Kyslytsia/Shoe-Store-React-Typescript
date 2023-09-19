import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import * as types from "./type";
import Avatar from "./avatar/Avatar";
import Active from "./actions/Active";
import Settings from "./settings/Settings";
import Favorites from "./favourites/Favourites";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setUserInfo } from "../../store/user-sclice/userSlice";
import { logout } from "../../store/account-sclice/accountSlice";

import "./Account.css";

const CustomBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
});

const CustomBoxMain = styled(Box)({});

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  backgroundColor: "white",
  borderColor: "divider",
  color: "  #2b2f4c",
  flex: "none",
});

const CustomTab = styled(Tab)({
  marginTop: "20px",
  fontSize: "20px",
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Account: React.FC<types.AccountProps> = ({ setId }) => {
  const [value, setValue] = React.useState(0);
  const user = useAppSelector((state) => state.account.value);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <CustomBoxMain
        className="custom-box-main"
        style={{
          flexGrow: 1,
          backgroundColor: "#f3f5f5",
          display: "flex",
          minHeight: 620,
          paddingTop: "60px",
        }}
      >
        <CustomTabs
          className="custom-tabs"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <CustomBox>
            <Avatar />
          </CustomBox>
          <CustomTab
            style={{ color: " #2b2f4c", margin: "0 auto" }}
            label="My actions"
          />
          <CustomTab
            style={{ color: " #2b2f4c", margin: "0 auto" }}
            label="Favorites"
          />
          <CustomTab
            style={{ color: " #2b2f4c", margin: "0 auto" }}
            label="Settings"
          />
          <CustomTab
            style={{ color: " #2b2f4c", margin: "0 auto" }}
            label="exit"
            onClick={() => {
              dispatch(setUserInfo(user));
              dispatch(logout());
              navigate("/");
            }}
          />
        </CustomTabs>
        <TabPanel value={value} index={0}>
          <Favorites setId={setId} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Active />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Favorites setId={setId} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Settings />
        </TabPanel>
      </CustomBoxMain>
    </div>
  );
};

export default Account;
