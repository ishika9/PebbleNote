import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export const Home = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Navbar open={open} handleDrawerToggle={handleDrawerToggle} />
            <main>
                <Sidebar open={open} />
            </main>
        </>
    );
};
