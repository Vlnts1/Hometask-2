import styled from 'styled-components';


type FormProps = {
    show: boolean;
  }

  export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EditFormOverlay = styled.div<FormProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const Form = styled.form<FormProps>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #fff;
  width: 30%;
  padding: 40px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const Input = styled.input`
  margin: 10px 20px 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 20px 10px 0;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 10px 20px 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 6px;
  resize: vertical;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #333;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;
