import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 65%;
  margin: 0 auto;
  grid-row-gap: 2rem;
`;

export const InputLabel = styled.div`
  color: black;
  font-family: 'Space Mono', monospace;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: #31ae15;
  font-family: 'Space Mono', monospace;
  color: black;
  font-size: 1.6rem;
  padding: 1.5rem;
  border-radius: 100px;
  font-weight: 700;
  border: none;
`;

export const Input = styled.input`
  font-family: 'Space Mono', monospace;
  font-size: 1.3rem;
  line-height: 1.8rem;
  border-radius: 10px;
  text-align: center;
`;

export const InputCheckbox = styled.input`
  input[type='checkbox'] {
    background-color: yellow;
  }
`;
