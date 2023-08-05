import React, { useState } from 'react'
import NoteListTable from '../components/NoteListTable'
import NoteSummaryTable from '../components/NoteSummaryTable'
import { Container } from './NotesPage.styled'
import AddNoteButtonForm from '../components/Forms/AddNewNote/AddNewNoteForm'
import ArchivedNotesTable from '../components/ArchivedNotesTable'

const NotesPage: React.FC = () => {
  const [showArchivedNotes, setShowArchivedNotes] = useState(true)

  return (
    <Container>
      <NoteListTable
        showArchivedNotes={showArchivedNotes}
        setShowArchivedNotes={setShowArchivedNotes}
      />
      <AddNoteButtonForm />
      <NoteSummaryTable />
      {showArchivedNotes && <ArchivedNotesTable />}
    </Container>
  )
}

export default NotesPage
