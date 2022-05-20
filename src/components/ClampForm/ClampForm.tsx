// Kindacode.com
import React, { useEffect, useState } from 'react';
import ClampFunction from '../ClampFunction/ClampFunction';

const clampGenerator = (
  minValueStr: string,
  maxValueStr: string,
  minVwStr: string,
  maxVwStr: string,
  defRemStr: string
) => {
  let minValue = parseInt(minValueStr);
  let maxValue = parseInt(maxValueStr);
  let minVw = parseInt(minVwStr);
  let maxVw = parseInt(maxVwStr);
  let defRem = parseInt(defRemStr);

  let diffValues = maxValue - minValue;
  let diffVw = maxVw - minVw;
  let partialPreferred = 100 * diffValues;
  let preferredValue = partialPreferred / diffVw;

  let factor1 = minVw * maxValue;
  let factor2 = maxVw * minValue;

  let diffFactor = factor1 - factor2;
  let diffVwInverse = minVw - maxVw;
  let partialRelative = diffFactor / diffVwInverse;
  let relativeValue = partialRelative / defRem;

  let firstTerm = minValue / defRem;
  firstTerm = parseFloat(firstTerm.toFixed(3));
  let secondTerm = parseFloat(preferredValue.toFixed(3));
  let thirdTerm = parseFloat(relativeValue.toFixed(3));
  let fourthTerm = maxValue / defRem;
  fourthTerm = parseFloat(fourthTerm.toFixed(3));

  if (thirdTerm >= 0) {
    console.log(
      `clamp(${firstTerm}rem, ${secondTerm}vw + ${thirdTerm}rem, ${fourthTerm}rem)`
    );
    let clampFc = `clamp(${firstTerm}rem, ${secondTerm}vw + ${thirdTerm}rem, ${fourthTerm}rem)`;
    return clampFc;
  } else {
    thirdTerm = Math.abs(thirdTerm);
    console.log(
      `clamp(${firstTerm}rem, ${secondTerm}vw - ${thirdTerm}rem, ${fourthTerm}rem)`
    );
    let clampFc = `clamp(${firstTerm}rem, ${secondTerm}vw - ${thirdTerm}rem, ${fourthTerm}rem)`;
    return clampFc;
  }
};

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

    let resultClampFc = clampGenerator(
      minValue,
      maxValue,
      minVw,
      maxVw,
      defRem
    );

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
