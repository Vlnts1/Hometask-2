import React from 'react'
import { Col, TBody, Table, Thead } from './NoteSummaryTable.styled'

const NoteSummaryTable: React.FC = () => {
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
            <Col>13</Col>
            <Col>12</Col>
      </TBody>
    </Table>
  )
}

export default NoteSummaryTable
