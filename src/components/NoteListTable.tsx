import React from 'react'
import {Thead, BtnsContainer, Button, Col, Table, TBody } from './NoteListTable.styled'

const NoteListTable: React.FC = () => {

  const notes = [
    { id: 1, img: "image.png", name: "Note 1", content: "Content 1", category: "Content category", created: "2023-08-01", date: "2023-08-01", archived: false },
    { id: 2, img: "image.png", name: "Note 2", content: "Content 2", category: "Content category", created: "2023-08-02", date: "2023-08-02", archived: false }
  ] 

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
