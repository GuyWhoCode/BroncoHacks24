import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import ProfileMenu from "./profile-button";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const ResponsiveAppBar = async () => {
    const session = await getServerSession(authOptions);
    const { name = "", image = "" } = session?.user || {name: "", image: ""};

    return (
        <AppBar position="static" color="success">
            <Toolbar sx={{ justifyContent: "center" }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        padding: "12px",
                        fontSize: "30px",
                        fontWeight: "bold",
                    }}
                >
                    Bronco Buddies
                </Typography>
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                    }}
                >
                    <Button
                        color="inherit"
                        sx={{
                            padding: "12px",
                            fontSize: "20px",
                            paddingRight: "20px",
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            padding: "12px",
                            fontSize: "20px",
                            paddingRight: "20px",
                        }}
                    >
                        Find a Buddy
                    </Button>
                    <ProfileMenu img={image || ""} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default ResponsiveAppBar;
