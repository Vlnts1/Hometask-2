import { createSelector } from 'reselect'
import { NotesState } from './types'

export const getNotesSelector = (state: NotesState) => state.notes

export const getArchivedNotesSelector = (state: NotesState) =>
  state.notes.filter((note) => note.archived)

export const memoizedGetArchivedNotesSelector = createSelector(
  [getArchivedNotesSelector],
  (archivedNotes) => archivedNotes,
)
