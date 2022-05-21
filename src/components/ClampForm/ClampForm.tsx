import React, { useEffect, useState } from 'react';
import ClampFunction from '../ClampFunction';
import clampGenerator from '../../utils/clampGenerator';

const ClampForm: React.FunctionComponent = () => {
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('0');
  const [minVw, setMinVw] = useState('0');
  const [maxVw, setMaxVw] = useState('0');
  const [defRem, setDefRem] = useState('0');
  const [clampFunction, setClampFunction] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setShowResult(false);
  }, []);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formValues = { minValue, maxValue, minVw, maxVw, defRem };
    let resultClampFc = clampGenerator(formValues);

    setClampFunction(resultClampFc);
    setShowResult(true);
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitForm}>
        <input
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
          type="text"
          placeholder="Minimum Value"
          className="input"
        />
        <input
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
          type="text"
          placeholder="Maximum Value"
          className="input"
        />
        <input
          value={minVw}
          onChange={(e) => setMinVw(e.target.value)}
          type="text"
          placeholder="Minimum Viewport Width"
          className="input"
        />
        <input
          value={maxVw}
          onChange={(e) => setMaxVw(e.target.value)}
          type="text"
          placeholder="Maximum Viewport Width"
          className="input"
        />
        <input
          value={defRem}
          onChange={(e) => setDefRem(e.target.value)}
          type="text"
          placeholder="Default Rem Value"
          className="input"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {showResult ? <ClampFunction clampFunction={clampFunction} /> : null}
    </div>
  );
};

export default ClampForm;
