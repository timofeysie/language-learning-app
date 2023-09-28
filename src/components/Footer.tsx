import React from "react";
import { Typography, AppBar } from "@mui/material";

const Footer: React.FC = () => {
    const packageVersion = process.env.REACT_APP_VERSION || "0.0.2"; // Get the version from environment variables or use a default value

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <div style={{ flex: 1 }}>{/* Your page content here */}</div>
            <AppBar
                position="static"
                color="transparent"
                sx={{ top: "auto", bottom: 0 }}
            >
                    <Typography
                        variant="body2"
                        color="inherit"
                        sx={{ fontSize: "x-small" }}
                    >
                         Some icons made from{" "}
                        <a href="https://www.onlinewebfonts.com/icon">
                            svg icons
                        </a>{" "}
                        and licensed by CC BY 4.0.
                        <br />
                        App version {packageVersion}.
                    </Typography>
            </AppBar>
        </div>
    );
};

export default Footer;
