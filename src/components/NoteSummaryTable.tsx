import React from 'react'
import { Col, NotesSummaryContainer, TBody, Table, Thead } from './NoteSummaryTable.styled'
import { useSelector } from 'react-redux'
import { getNotesSelector } from '../redux/notes/selectors'

const NoteSummaryTable: React.FC = () => {
  const notes = useSelector(getNotesSelector)

  const activeNotesCount = notes.filter((note) => !note.archived).length
  const archivedNotesCount = notes.filter((note) => note.archived).length

  return (
    <NotesSummaryContainer>
      <Table>
        <Thead>
          <Col>Note Category</Col>
          <Col>Active</Col>
          <Col>Archived</Col>
        </Thead>
        <TBody>
          <Col>Task</Col>
          <Col>{activeNotesCount}</Col>
          <Col>{archivedNotesCount}</Col>
        </TBody>
      </Table>
    </NotesSummaryContainer>
  )
}

export default NoteSummaryTable
