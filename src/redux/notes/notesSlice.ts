import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialNotes } from "./notes";
import { Note } from "./types";


  const notesSlice = createSlice({
    name: 'notes',
    initialState: initialNotes,
    reducers: {
      archiveNote: (state, action: PayloadAction<number>) => {
        const note = state.find((note) => note.id === action.payload);
        if (note) {
          note.archived = true;
        }
      },
      unarchiveNote: (state, action: PayloadAction<number>) => {
        const note = state.find((note) => note.id === action.payload);
        if (note) {
          note.archived = false;
        }
      },
      removeNote: (state, action: PayloadAction<number>) => {
        const index = state.findIndex((note) => note.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
      addNote: (state, action: PayloadAction<Note>) => {
        state.push(action.payload);
      },
    }
  });
  
export const { addNote, archiveNote, unarchiveNote, removeNote } = notesSlice.actions;

export const notesReducer = notesSlice .reducer;

