// EditForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Textarea, SubmitButton, CloseButton, Container, Select, EditFormOverlay, ColumnContainer } from './EditFormNote.styled';
import { Note } from '../../../redux/notes/types';
import { editNote } from '../../../redux/notes/notesSlice';
import { categories } from '../../../utils/categories';

type EditFormProps = {
    note: Note;
    onClose: () => void;
    show: boolean;
}

const EditForm: React.FC<EditFormProps> = ({ note, onClose, show }) => {
  const dispatch = useDispatch();
  const [editedNote, setEditedNote] = useState<Note>(note);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editNote(editedNote));
    onClose();
  };


  return (
   <Container>
    <EditFormOverlay show={show} onClick={onClose} /> 
    <Form show={show} onSubmit={handleSubmit}>
    <CloseButton onClick={onClose}>X</CloseButton>
    <ColumnContainer>
    <Input
        type="text"
        name="name"
        placeholder="Name"
        value={editedNote.name}
        onChange={handleInputChange}
      />
    <Input
        type="text"
        name="dates"
        placeholder="Date"
        value={editedNote.date}
        onChange={handleInputChange}
      />
      <Input
        type="date"
        name="created"
        placeholder="Created"
        value={editedNote.created}
        onChange={handleInputChange}
      />
      </ColumnContainer>
        <Select
        name="category"
        value={editedNote.category}
        onChange={handleInputChange}
        >
        <option value="">Select Category</option>
        {categories.map(category => (
            <option key={category} value={category}>
            {category}
            </option>
        ))}
        </Select>

      <Textarea
        name="content"
        placeholder="Content"
        value={editedNote.content}
        onChange={handleTextareaChange}
      />
      <SubmitButton type="submit">Edit Note</SubmitButton>
    </Form>
   </Container>
  );
};

export default EditForm;
