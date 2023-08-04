import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
    id: 1,
    img: "note1.jpg",
    name: "Note 1",
    created: "2023-08-01",
    category: "Personal",
    content: "This is the content of Note 1.",
    date: "2023-08-01",
    archived: false,
  },
  {
    id: 2,
    img: "note2.jpg",
    name: "Note 2",
    created: "2023-08-02",
    category: "Work",
    content: "This is the content of Note 2.",
    date: "2023-08-02",
    archived: false,
  },
  {
    id: 3,
    img: "note3.jpg",
    name: "Note 3",
    created: "2023-08-03",
    category: "Personal",
    content: "This is the content of Note 3.",
    date: "2023-08-03",
    archived: false,
  },
  {
    id: 4,
    img: "note4.jpg",
    name: "Note 4",
    created: "2023-08-04",
    category: "Work",
    content: "This is the content of Note 4.",
    date: "2023-08-04",
    archived: false,
  },
  {
    id: 5,
    img: "note5.jpg",
    name: "Note 5",
    created: "2023-08-05",
    category: "Personal",
    content: "This is the content of Note 5.",
    date: "2023-08-05",
    archived: false,
  },
  {
    id: 6,
    img: "note6.jpg",
    name: "Note 6",
    created: "2023-08-06",
    category: "Work",
    content: "This is the content of Note 6.",
    date: "2023-08-06",
    archived: false,
  },
  {
    id: 7,
    img: "note7.jpg",
    name: "Note 7",
    created: "2023-08-07",
    category: "Personal",
    content: "This is the content of Note 7.",
    date: "2023-08-07",
    archived: false,
  }];

  const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {}
  });
  

export const notesReducer = notesSlice .reducer;

