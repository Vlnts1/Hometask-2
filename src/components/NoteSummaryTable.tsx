import React from 'react'
import { Col, TBody, Table, Thead } from './NoteSummaryTable.styled'
import { useSelector } from 'react-redux';
import { getNotesSelector } from '../redux/notes/selectors';

const NoteSummaryTable: React.FC = () => {

  const notes = useSelector(getNotesSelector);

  const activeNotesCount = notes.filter((note) => !note.archived).length;
  const archivedNotesCount = notes.filter((note) => note.archived).length;

  return (
    <Table>
      <Thead>
            <Col></Col>
            <Col>Note Category</Col>
            <Col>Active</Col>
            <Col>Archived</Col>
      </Thead>
      <TBody>
            <Col>icon</Col>
            <Col>Task</Col>
            <Col>{activeNotesCount}</Col>
            <Col>{archivedNotesCount}</Col>
      </TBody>
    </Table>
  )
}

export default NoteSummaryTable
