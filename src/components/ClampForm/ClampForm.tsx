import React, { useEffect, useState } from 'react';
import ClampFunction from '../ClampFunction';
import clampGenerator from '../../utils/clampGenerator';
import { Title } from '..';
import {
  Wrapper,
  FormWrapper,
  InputWrapper,
  Form,
  Grid,
  InputLabel,
  ResultWrapper,
  SubmitButton,
  Input,
  InputCheckbox,
} from './styles';

const ClampForm: React.FunctionComponent = () => {
  const [minValue, setMinValue] = useState('10');
  const [maxValue, setMaxValue] = useState('20');
  const [minVw, setMinVw] = useState('1026');
  const [maxVw, setMaxVw] = useState('1920');
  const [defRem, setDefRem] = useState('16');
  const [clampFunction, setClampFunction] = useState('');
  const [addCalc, setAddCalc] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setAddCalc(false);
    setShowResult(false);
  }, []);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formValues = { minValue, maxValue, minVw, maxVw, defRem, addCalc };
    let resultClampFc = clampGenerator(formValues);

    setClampFunction(resultClampFc);
    setShowResult(true);
  };

  return (
    <Wrapper className="wrapper">
      <Title />
      <FormWrapper className="formWrapper">
        <Form className="clampForm" onSubmit={submitForm}>
          <Grid className="gridWrapper">
            <InputWrapper className="inputWrapper">
              <InputLabel className="inputLabel">Minimum Value (px)</InputLabel>
              <Input
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
                type="text"
                placeholder="Minimum Value"
                className="input"
              />
            </InputWrapper>
            <InputWrapper className="inputWrapper">
              <InputLabel className="inputLabel">Maximum Value (px)</InputLabel>
              <Input
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
                type="text"
                placeholder="Maximum Value"
                className="input"
              />
            </InputWrapper>
            <InputWrapper className="inputWrapper">
              <InputLabel className="inputLabel">
                Minimum Viewport Width (px)
              </InputLabel>
              <Input
                value={minVw}
                onChange={(e) => setMinVw(e.target.value)}
                type="text"
                placeholder="Minimum Viewport Width"
                className="input"
              />
            </InputWrapper>
            <InputWrapper className="inputWrapper">
              <InputLabel className="inputLabel">
                Maximum Viewport Width (px)
              </InputLabel>
              <Input
                value={maxVw}
                onChange={(e) => setMaxVw(e.target.value)}
                type="text"
                placeholder="Maximum Viewport Width"
                className="input"
              />
            </InputWrapper>
            <InputWrapper className="inputWrapper">
              <InputLabel className="inputLabel">
                Default Rem Value (px)
              </InputLabel>
              <Input
                value={defRem}
                onChange={(e) => setDefRem(e.target.value)}
                type="text"
                placeholder="Default Rem Value"
                className="input"
              />
            </InputWrapper>
            <InputWrapper className="inputWrapper">
              <InputLabel className="inputLabel">Add calc()</InputLabel>
              <InputCheckbox
                onChange={(e) => {
                  addCalc ? setAddCalc(false) : setAddCalc(true);
                }}
                type="checkbox"
                className="inputCheckbox"
              />
            </InputWrapper>
          </Grid>
          <SubmitButton type="submit" className="submitButton">
            Generate Clamp
          </SubmitButton>
        </Form>
      </FormWrapper>
      <ResultWrapper className="resultWrapper">
        {showResult ? <ClampFunction clampFunction={clampFunction} /> : null}
      </ResultWrapper>
    </Wrapper>
  );
};

export default ClampForm;
