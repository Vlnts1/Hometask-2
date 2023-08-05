import styled from 'styled-components'

export const Table = styled.div`
  font-family: Arial, Helvetica, sans-serif;

`

export const Thead = styled.div`
      background-color: #c2c2c2;
      display: flex;
      flex-direction: row;
      padding: 5px;
      border-radius: 10px;
      color: black;
`;

export const TBody = styled.div`
      background-color: #f5f5f5;
      display: flex;
      flex-direction: row;
      padding: 5px;
      margin-top: 2%;
      border-radius: 10px;
`;

export const Col = styled.div`
  flex: 1;
  padding-top: 5px;
  text-align: center;
`;


export const BtnsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px;
`;

export const Button = styled.button`
      background-color: #f5f5f5;
      font-size: 19px;
      border: none;
      padding: 0.5rem;
      margin-left: 12%;
      border-radius: 5px;
      cursor: pointer;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;

`;