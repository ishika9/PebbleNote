export const findNotesinArchive = (archive, id) => {
    return archive.some((note) => note.id === id);
};
