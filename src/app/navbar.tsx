import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const ResponsiveAppBar = () => {
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
                    <Button
                        color="inherit"
                        sx={{
                            padding: "12px",
                            fontSize: "20px",
                        }}
                    >
                        John Doe
                        <Avatar
                            sx={{ width: 45, height: 45, marginLeft: "15px" }}
                        >
                            J
                        </Avatar>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default ResponsiveAppBar;
