import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "../styles/Navbar.module.css";
import logo from "../assets/logo.jpeg";

export default function Navbar({ open, handleDrawerToggle }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                className={classes.Appbar}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleDrawerToggle}
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h3"
                        component="div"
                        className={classes.Typography}
                    >
                        pebblenote
                    </Typography>
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: "40px",
                            height: "auto",
                            margin: "0 8px 0 8px",
                        }}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
