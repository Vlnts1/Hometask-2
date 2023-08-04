import { NotesState } from "./types";

export const getNotesSelector = (state: NotesState) => state.notes;
