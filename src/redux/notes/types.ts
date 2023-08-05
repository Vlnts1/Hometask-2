export type Note = {
  id: number
  img: string
  name: string
  created: string
  category: string
  content: string
  date: string
  archived: boolean
}

export type NotesState = {
  notes: Note[]
  activeNotesCount: number
  archivedNotesCount: number
}
