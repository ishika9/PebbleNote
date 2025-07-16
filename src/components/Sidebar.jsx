import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";
import TrashIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";
import clsx from "clsx";

// const drawerWidthExpanded = 200;
// const drawerWidthCollapsed = 72;

const items = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Archive", icon: <ArchiveIcon />, path: "/archive" },
    { text: "Important", icon: <StarIcon />, path: "/important" },
    // { text: "Bin", icon: <TrashIcon />, path: "/bin" },
];

export default function Sidebar({ open }) {
    return (
        <Drawer
            id="Drawer"
            variant="permanent"
            className={clsx(
                classes.sidebar,
                open ? classes.sidebarExpanded : classes.sidebarCollapsed
            )}
            sx={{
                // width: open ? drawerWidthExpanded : drawerWidthCollapsed,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    // width: open ? drawerWidthExpanded : drawerWidthCollapsed,
                    boxSizing: "border-box",
                    transition: "width 0.3s",
                    overflowX: "hidden",
                    borderRight: "none",
                },
            }}
        >
            <Box
                sx={{ overflow: "auto", mt: 12 }}
                // className={classes.list}
            >
                <List>
                    {items.map(({ text, icon, path }) => (
                        <Link
                            to={path}
                            className={classes.listItem}
                            id={`link#${text}`}
                        >
                            <ListItem
                                key={text}
                                disablePadding
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? "initial"
                                            : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                        className={classes.listItemIcon}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                    {open && (
                                        <ListItemText
                                            className={clsx(
                                                classes.listItemText,
                                                !open && "collapsed"
                                            )}
                                            primary={text}
                                            primaryTypographyProps={{
                                                component: "span",
                                                style: {
                                                    fontFamily:
                                                        '"Quicksand", sans-serif',
                                                },
                                            }}
                                        />
                                    )}
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
}
