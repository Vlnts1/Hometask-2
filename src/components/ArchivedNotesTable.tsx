import React from 'react'
import { Col, TBody, Table, Thead } from './NoteSummaryTable.styled'
import { useSelector } from 'react-redux'
import { memoizedGetArchivedNotesSelector } from '../redux/notes/selectors'
import { Button } from './NoteListTable.styled'
import { useDispatch } from 'react-redux'
import { removeLastArchivedNote } from '../redux/notes/notesSlice'

const ArchivedNotesTable = () => {
  const archivedNotes = useSelector(memoizedGetArchivedNotesSelector)
  const dispatch = useDispatch()

  const handleRemoveLastArchivedNote = () => {
    const lastArchivedNote = archivedNotes[archivedNotes.length - 1]
    if (lastArchivedNote) {
      dispatch(removeLastArchivedNote(lastArchivedNote.id))
    }
  }

  return (
    <Table>
      <Thead>
        <Col>Name</Col>
        <Col>Created</Col>
        <Col>Category</Col>
        <Col>Content</Col>
        <Col>Dates</Col>
      </Thead>
      {archivedNotes.map((note) => (
        <TBody key={note.id}>
          <Col>{note.name}</Col>
          <Col>{note.created}</Col>
          <Col>{note.category}</Col>
          <Col>{note.content}</Col>
          <Col>{note.date}</Col>
          <Col>
            {' '}
            <Button className='remove-btn' onClick={handleRemoveLastArchivedNote}>
              <i className='fa-solid fa-trash'></i>
            </Button>
          </Col>
        </TBody>
      ))}
    </Table>
  )
}

export default ArchivedNotesTable
