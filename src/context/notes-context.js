import { createContext, useContext, useEffect, useReducer } from "react";
import { notesreducer } from "../reducers/notesreducer";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
    const initialState = {
        title: "",
        text: "",
        notes: JSON.parse(localStorage.getItem("notes")) || [],
        archive: [],
        important: [],
    };

    const [state, dispatch] = useReducer(notesreducer, initialState);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state.notes));
        console.log(JSON.parse(localStorage.getItem("notes")));
    }, [state.notes]);

    return (
        <notesContext.Provider value={{ state, dispatch }}>
            {children}
        </notesContext.Provider>
    );
};

const useNotes = () => useContext(notesContext);
export { NotesProvider, useNotes };
