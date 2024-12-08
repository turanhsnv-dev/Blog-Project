import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import "../../css/UserProfile.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Avatar } from "@mui/material";
import UserProfileBlog from "./UserProfileBlog";
import UserProfileJob from "./UserProfileJob";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        "aria-controls": `nav-tabpanel-${index}`,
    };
}

export default function UserProfile() {
    const [value, setValue] = React.useState(0);
    const [user, setUser] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    return (
        <>
            <div className={`UPheader tabBackground-${value}`}>
                <div className="headerLeft">
                    <Avatar src={user.avatar} />
                    <div className="headerLeftcontent">
                        <h4>{user.username}</h4>
                        <p>05.03.2024</p>
                    </div>
                </div>
                <Box sx={{ width: "35%" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                        role="navigation"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "black",
                            },
                            className: "TabIndicator",
                        }}
                        sx={{
                            "& .MuiTab-root": {
                                color: "white",
                            },
                            "& .Mui-selected": {
                                color: "black",
                                fontWeight: "bold",
                                backgroundColor: "white",
                                border: "none",
                            },
                        }}
                    >
                        <Tab label="Blogs" {...a11yProps(0)} />
                        <Tab label="Jobs" {...a11yProps(1)} />
                        <Tab label="Page Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
            </div>

            <CustomTabPanel value={value} index={0}>
                <UserProfileBlog />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <UserProfileJob />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <h3>Page Three Section</h3>
                <p>Content for Page Three goes here.</p>
            </CustomTabPanel>
        </>
    );
}