import "../styles/Home.css";
import { useNotes } from "../context/notes-context";
import { findNotesinArchive } from "../utils/findNotesinArchive";

export const NotesCard = ({ id, title, text, isPinned }) => {
    const { state, dispatch } = useNotes();
    const onPinClick = (id) => {
        !isPinned
            ? dispatch({
                  type: "PIN",
                  payload: { id },
              })
            : dispatch({
                  type: "UNPIN",
                  payload: { id },
              });
    };
    const onArchiveClick = (id) => {
        !isNotesinArchive
            ? dispatch({
                  type: "ARCHIVE",
                  payload: { id },
              })
            : dispatch({
                  type: "REMOVE_FROM_ARCHIVE",
                  payload: { id },
              });
    };
    const isNotesinArchive = findNotesinArchive(state.archive, id);
    return (
        <div className="note-card" key={id}>
            <div className="note-header">
                <p className="note-title">{title}</p>
                {!isNotesinArchive ? (
                    <button
                        className={
                            isPinned ? "icon-button-pinned" : "icon-button"
                        }
                        title="Pin/Unpin"
                        onClick={() => onPinClick(id)}
                    >
                        📌
                    </button>
                ) : (
                    <></>
                )}
            </div>
            <div className="note-body">
                <p className="note-text">{text}</p>
                <div className="note-actions">
                    <button
                        className="icon-button"
                        title="Archive"
                        onClick={() => onArchiveClick(id)}
                    >
                        📥
                    </button>
                    <button className="icon-button" title="Delete">
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    );
};
