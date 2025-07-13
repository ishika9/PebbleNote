import "../styles/Home.css";
import { useNotes } from "../context/notes-context";

export const NotesCard = ({ id, title, text, isPinned }) => {
    const { dispatch } = useNotes();
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
    return (
        <div className="note-card" key={id}>
            <div className="note-header">
                <p className="note-title">{title}</p>
                <button
                    className={isPinned ? "icon-button-pinned" : "icon-button"}
                    title="Pin/Unpin"
                    onClick={() => onPinClick(id)}
                >
                    📌
                </button>
            </div>
            <div className="note-body">
                <p className="note-text">{text}</p>
                <div className="note-actions">
                    <button className="icon-button" title="Archive">
                        📦
                    </button>
                    <button className="icon-button" title="Delete">
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    );
};
