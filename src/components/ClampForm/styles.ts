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
  padding-bottom: 2rem;
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
  gap: 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 65%;
  margin: 0 auto;
  grid-row-gap: 2rem;
`;

export const InputLabel = styled.div`
  color: #3F3E42;
  font-family: 'Questrial', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: #09b000;
  color: #0d3430;
  font-size: 1.6rem;
  font-family: 'Code', sans-serif;
  padding: 0.75rem;
  border-radius: 15px;
  font-weight: 700;
  border: none
`;

export const Input = styled.input`
  font-size: 1.3rem;
  line-height: 1.8rem;
  border-radius: 10px;
  text-align: center
`;
