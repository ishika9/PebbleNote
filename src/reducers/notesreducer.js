import { v4 as uuid } from "uuid";

export const notesreducer = (state, action) => {
    switch (action.type) {
        case "TITLE": {
            return {
                ...state,
                title: action.payload,
            };
        }
        case "TEXT": {
            return {
                ...state,
                text: action.payload,
            };
        }
        case "ADD_NOTE": {
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        text: state.text,
                        title: state.title,
                        id: uuid(),
                        isPinned: false,
                    },
                ],
            };
        }
        case "CLEAR_INPUT": {
            return {
                ...state,
                title: "",
                text: "",
            };
        }
        case "PIN": {
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id
                        ? { ...note, isPinned: true }
                        : note
                ),
            };
        }
        case "UNPIN": {
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id
                        ? { ...note, isPinned: false }
                        : note
                ),
            };
        }
        case "ARCHIVE": {
            return {
                ...state,
                archive: [
                    ...state.archive,
                    state.notes.find((note) => note.id === action.payload.id),
                ],
                notes: state.notes.filter(
                    (note) => note.id != action.payload.id
                ),
            };
        }
        case "REMOVE_FROM_ARCHIVE": {
            return {
                ...state,
                notes: [
                    ...state.notes,
                    state.archive.find(({ id }) => id === action.payload.id),
                ],
                archive: state.archive.filter(
                    ({ id }) => id !== action.payload.id
                ),
            };
        }
        default:
            return state;
    }
};
