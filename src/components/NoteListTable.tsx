import React, { useState } from 'react'
import {Thead, BtnsContainer, Button, Col, Table, TBody, Icon } from './NoteListTable.styled'
import { useSelector } from 'react-redux';
import { getNotesSelector } from '../redux/notes/selectors';
import { useDispatch } from 'react-redux';
import { archiveNote, removeNote, unarchiveNote } from '../redux/notes/notesSlice';
import EditForm from './Forms/EditNote/EditFormNote';



const NoteListTable: React.FC = () => {
  const [editNoteId, setEditNoteId] = useState<number | null>(null);

  const notes = useSelector(getNotesSelector);
  console.log("Notes from useSelector:", notes);

  const dispatch = useDispatch();

  const handleArchive = (id: number) => {
    dispatch(archiveNote(id));
  };

  const handleUnarchive = (id: number) => {
    dispatch(unarchiveNote(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeNote(id));
  };

  const handleEditNote = (noteId: number) => {
    setEditNoteId(noteId);
  };

  const handleCloseEditForm = () => {
    setEditNoteId(null);
  };

  return (
    <Table>
      <Thead>
            <Col></Col>
            <Col>Name</Col>
            <Col>Created</Col>
            <Col>Category</Col>
            <Col>Content</Col>
            <Col>Dates</Col>
            <Col>
                <BtnsContainer>
                  <Button className="archive-btn" data-index="0"><i className="fa-solid fa-box-archive"></i></Button>
                  <Button className="remove-btn" data-index="0"><i className="fa-solid fa-trash"></i></Button>
                </BtnsContainer>
            </Col>
      </Thead>
      {notes.map((note) => (
      <TBody key={note.id}>
              <Col><Icon src={note.img} alt=""/></Col>
              <Col>{note.name}</Col>
              <Col>{note.created}</Col>
              <Col>{note.category}</Col>
              <Col>{note.content}</Col>
              <Col>{note.date}</Col>
              <Col>
              <BtnsContainer>
              <Button className="edit-btn" data-id={note.id} onClick={() => handleEditNote(note.id)}>
              <i className="fa-solid fa-pen"></i>
            </Button>
            {editNoteId === note.id && (
              <EditForm
                note={note}
                onClose={handleCloseEditForm}
                show={editNoteId === note.id}
              />
            )}
                {!note.archived ? (
                <Button className="edit-btn" data-index="0" onClick={() => handleArchive(note.id)}><i className="fa-solid fa-box-archive"></i></Button>
                ) : (
                <Button className="archive-btn" data-index="0" onClick={() => handleUnarchive(note.id)}><i className="fa-solid fa-inbox"></i></Button>
                )}
                <Button className="remove-btn" data-index="0" onClick={() => handleRemove(note.id)}><i className="fa-solid fa-trash"></i></Button>
              </BtnsContainer>
              </Col>
        </TBody>
                ))}
    </Table>
  )
}

export default NoteListTable
