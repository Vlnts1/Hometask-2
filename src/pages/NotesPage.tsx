import React from 'react'
import NoteListTable from '../components/NoteListTable'
import NoteSummaryTable from '../components/NoteSummaryTable'
import { Container } from './NotesPage.styled'

const NotesPage: React.FC = () => {
  return (
    <Container>
      <NoteListTable />
      <NoteSummaryTable />
    </Container>
  )
}

export default NotesPage
