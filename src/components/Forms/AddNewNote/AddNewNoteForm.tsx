import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  Button,
  Form,
  Input,
  SubmitButton,
  Overlay,
  Select,
  Textarea,
  CloseButton,
} from './AddNewNoteForm.styled'
import { Note } from '../../../redux/notes/types'
import { addNote } from '../../../redux/notes/notesSlice'
import { categories } from '../../../utils/categories'

const AddNoteButtonForm: React.FC = () => {
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false)
  const currentDate = new Date().toISOString().slice(0, 10)

  const [note, setNote] = useState<Note>({
    id: 0,
    img: '',
    name: '',
    created: '',
    category: '',
    content: '',
    date: '',
    archived: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNote((prevNote) => ({ ...prevNote, [name]: value }))
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNote((prevNote) => ({ ...prevNote, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addNote(note))
    setNote({
      id: 0,
      img: '',
      name: '',
      created: currentDate,
      category: '',
      content: '',
      date: '',
      archived: false,
    })
    setShowForm(false)
  }

  const handleCloseForm = () => {
    setNote({
      id: 0,
      img: '',
      name: '',
      created: currentDate,
      category: '',
      content: '',
      date: '',
      archived: false,
    })
    setShowForm(false)
  }

  return (
    <Container>
      <Button onClick={() => setShowForm(!showForm)}>Add Note</Button>
      <Overlay show={showForm} onClick={() => setShowForm(false)} />
      <Form show={showForm} onSubmit={handleSubmit}>
        <CloseButton onClick={handleCloseForm}>X</CloseButton>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          value={note.name}
          onChange={handleInputChange}
        />
        <Input
          type='date'
          name='created'
          placeholder='Created'
          value={note.created}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='name'
          placeholder='Dates'
          value={note.date}
          onChange={handleInputChange}
        />
        <Select name='category' value={note.category} onChange={handleInputChange}>
          <option value=''>Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
        <Textarea
          name='content'
          placeholder='Content'
          value={note.content}
          onChange={handleTextareaChange}
        />
        <SubmitButton type='submit'>Add Note</SubmitButton>
      </Form>
    </Container>
  )
}

export default AddNoteButtonForm
