import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useReducer, useState } from "react";
import { notesreducer } from "../reducers/notesreducer";
import "../styles/Home.css";
import { NotesCard } from "../components/NotesCard";
import { useNotes } from "../context/notes-context";

export const Home = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen((prev) => !prev);
    };

    const { state, dispatch } = useNotes();

    const sidebarWidth = open ? 200 : 72;
    const navbarHeight = 78;

    const pinnedNotes =
        state.notes?.length > 0 &&
        state.notes.filter(({ isPinned }) => isPinned);
    const otherNotes =
        state.notes?.length > 0 &&
        state.notes.filter(({ isPinned }) => !isPinned);

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
                        <div
                            style={{
                                padding: "1rem",
                                overflowY: "auto",
                                width: "400px",
                                position: "relative",
                                height: "232px",
                                backgroundColor: "var(--color-surface)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 8px var(--color-shadow)",
                                fontFamily: "'Quicksand', sans-serif",
                                marginLeft: "28px",
                                marginTop: "28px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                <input
                                    placeholder="Title"
                                    style={{
                                        height: "40px",
                                        padding: "0 0.75rem",
                                        border: "1px solid var(--color-border)",
                                        borderRadius: "8px",
                                        backgroundColor: "var(--color-bg)",
                                        color: "var(--color-text)",
                                        fontSize: "1rem",
                                        fontFamily: "inherit",
                                        outline: "none",
                                    }}
                                    value={state.title}
                                    onChange={(e) =>
                                        dispatch({
                                            type: "TITLE",
                                            payload: e.target.value,
                                        })
                                    }
                                />
                                <textarea
                                    placeholder="Write your note..."
                                    style={{
                                        height: "120px",
                                        padding: "0.75rem",
                                        border: "1px solid var(--color-border)",
                                        borderRadius: "8px",
                                        backgroundColor: "var(--color-bg)",
                                        color: "var(--color-text)",
                                        fontSize: "1rem",
                                        fontFamily: "inherit",
                                        resize: "none",
                                        outline: "none",
                                    }}
                                    value={state.text}
                                    onChange={(e) =>
                                        dispatch({
                                            type: "TEXT",
                                            payload: e.target.value,
                                        })
                                    }
                                />
                                <button
                                    style={{
                                        position: "absolute",
                                        bottom: "0.3rem",
                                        right: "1rem",
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        backgroundColor:
                                            "var(--color-secondary)",
                                        opacity:
                                            state.text.length === 0 ? 0.4 : 1,
                                        color: "white",
                                        border: "none",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        cursor:
                                            state.text.length === 0
                                                ? "not-allowed"
                                                : "pointer",
                                        boxShadow:
                                            "0 2px 6px var(--color-shadow)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    title="Add Note"
                                    onClick={() => {
                                        dispatch({
                                            type: "ADD_NOTE",
                                        });
                                        dispatch({
                                            type: "CLEAR_INPUT",
                                        });
                                    }}
                                    disabled={state.text.length == 0}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        {pinnedNotes.length > 0 && <h3>Pinned Notes</h3>}
                        {pinnedNotes.length > 0 &&
                            pinnedNotes.map((note) => (
                                <NotesCard
                                    key={note.id}
                                    id={note.id}
                                    title={note.title}
                                    text={note.text}
                                    isPinned={note.isPinned}
                                />
                            ))}
                        {pinnedNotes.length > 0 && <h3>Other Notes</h3>}
                        {otherNotes.length > 0 &&
                            otherNotes.map((note) => (
                                <NotesCard
                                    key={note.id}
                                    id={note.id}
                                    title={note.title}
                                    text={note.text}
                                    isPinned={note.isPinned}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};
