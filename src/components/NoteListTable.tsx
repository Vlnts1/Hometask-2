import React from 'react'
import {Thead, BtnsContainer, Button, Col, Table, TBody } from './NoteListTable.styled'
import { useSelector } from 'react-redux';
import { getNotesSelector } from '../redux/notes/selectors';



const NoteListTable: React.FC = () => {

  const notes = useSelector(getNotesSelector);
  console.log("Notes from useSelector:", notes);


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
              <Col>{note.img}</Col>
              <Col>{note.name}</Col>
              <Col>{note.created}</Col>
              <Col>{note.category}</Col>
              <Col>{note.content}</Col>
              <Col>{note.date}</Col>
              <Col>
              <BtnsContainer>
                <Button className="edit-btn" data-index="0"><i className="fa-solid fa-pen"></i></Button>
                <Button className="archive-btn" data-index="0"><i className="fa-solid fa-box-archive"></i></Button>
                <Button className="remove-btn" data-index="0"><i className="fa-solid fa-trash"></i></Button>
              </BtnsContainer>
              </Col>
        </TBody>
                ))}
    </Table>
  )
}

export default NoteListTable
