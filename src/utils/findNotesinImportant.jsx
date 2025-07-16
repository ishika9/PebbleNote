export const findNotesinImportant = (important, id) => {
    return important.some((note) => note.id === id);
};
