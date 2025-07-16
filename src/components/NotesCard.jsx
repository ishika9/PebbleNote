import { useState } from "react";
import "../styles/Home.css";
import { useNotes } from "../context/notes-context";
import { findNotesinArchive } from "../utils/findNotesinArchive";
import { findNotesinImportant } from "../utils/findNotesinImportant";

export const NotesCard = ({ id, title, text, isPinned }) => {
    const { state, dispatch } = useNotes();
    const [showDropdown, setShowDropdown] = useState(false);

    const isNotesinArchive = findNotesinArchive(state.archive, id);
    const isNotesinImportant = findNotesinImportant(state.important, id);

    const onPinClick = () => {
        dispatch({ type: isPinned ? "UNPIN" : "PIN", payload: { id } });
    };

    const onArchiveClick = () => {
        dispatch({
            type: isNotesinArchive ? "REMOVE_FROM_ARCHIVE" : "ARCHIVE",
            payload: { id },
        });
    };

    const onImportantClick = () => {
        dispatch({
            type: isNotesinImportant ? "REMOVE_FROM_IMPORTANT" : "IMPORTANT",
            payload: { id },
        });
    };

    const onDeleteClick = () => {
        dispatch({ type: "DELETE", payload: { id } });
    };

    return (
        <div className="note-card" key={id}>
            <div className="note-header">
                <p className="note-title">{title}</p>
                <div className="note-menu-container">
                    {!isNotesinArchive && (
                        <button
                            className={
                                isPinned ? "icon-button-pinned" : "icon-button"
                            }
                            title="Pin/Unpin"
                            onClick={onPinClick}
                        >
                            📌
                        </button>
                    )}
                    <button
                        className="icon-button"
                        title="More actions"
                        onClick={() => setShowDropdown((prev) => !prev)}
                    >
                        ⋯
                    </button>

                    {showDropdown && (
                        <div className="folder-dropdown">
                            <button onClick={onImportantClick}>
                                {isNotesinImportant
                                    ? "❌ Remove from Important"
                                    : "⭐ Mark Important"}
                            </button>
                            <button onClick={onArchiveClick}>
                                {isNotesinArchive
                                    ? "❌ Remove from Archive"
                                    : "📥 Archive"}
                            </button>
                            <button onClick={onDeleteClick}>🗑️ Delete</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="note-body">
                <p className="note-text">{text}</p>
            </div>
        </div>
    );
};
