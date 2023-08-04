import React from 'react'
import NoteListTable from '../components/NoteListTable'
import NoteSummaryTable from '../components/NoteSummaryTable'
import { Container } from './NotesPage.styled'
import AddNoteButtonForm from '../components/Forms/AddNewNote/AddNewNoteForm'

const NotesPage: React.FC = () => {
  return (
    <Container>
      <NoteListTable />
      <AddNoteButtonForm />
      <NoteSummaryTable />
    </Container>
  )
}

export default NotesPage
