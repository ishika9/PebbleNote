import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useReducer, useState } from "react";
import { notesreducer } from "../reducers/notesreducer";
import "../styles/Home.css";
import { NotesCard } from "../components/NotesCard";
import { useNotes } from "../context/notes-context";

export const Important = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen((prev) => !prev);
    };
    const sidebarWidth = open ? 200 : 72;
    const navbarHeight = 78;
    const { state, dispatch } = useNotes();

    const ImportantNotes = state.important;

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <div style={{ height: navbarHeight, flexShrink: 0 }}>
                    <Navbar
                        open={open}
                        handleDrawerToggle={handleDrawerToggle}
                    />
                </div>

                <div style={{ display: "flex", flexGrow: 1 }}>
                    <div
                        style={{
                            width: sidebarWidth,
                            flexShrink: 0,
                            transition: "width 0.3s ease",
                        }}
                    >
                        <Sidebar open={open} />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            padding: "1rem",
                            gap: "1rem",
                            overflowY: "auto",
                        }}
                    >
                        <h3>Important</h3>
                        {ImportantNotes.length > 0
                            ? ImportantNotes.map((note) => (
                                  <NotesCard
                                      key={note.id}
                                      id={note.id}
                                      title={note.title}
                                      text={note.text}
                                  />
                              ))
                            : "You don't have any notes marked important"}
                    </div>
                </div>
            </div>
        </>
    );
};
