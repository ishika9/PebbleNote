import { createContext, useContext, useReducer } from "react";
import { notesreducer } from "../reducers/notesreducer";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
    const initialState = {
        title: "",
        text: "",
        notes: [],
        archive: [],
    };

    const [state, dispatch] = useReducer(notesreducer, initialState);
    return (
        <notesContext.Provider value={{ state, dispatch }}>
            {children}
        </notesContext.Provider>
    );
};

const useNotes = () => useContext(notesContext);
export { NotesProvider, useNotes };
