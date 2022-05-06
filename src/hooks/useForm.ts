import { useState } from "react";

interface InitialState {
  minValue: number;
  maxValue: number;
  minVw: number;
  maxVw: number;
  defRem: number;
}

// useForm functional component
export const useForm = (callback: any, initialState: InitialState) => {
  const [values, setValues] = useState(initialState);

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: 
  event.target.value });
  };

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // triggering the callback
  };

  // return values
  return {
    onChange,
    onSubmit,
    values,
  };
}
