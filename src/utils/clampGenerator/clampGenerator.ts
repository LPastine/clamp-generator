interface FormValues {
  minValue: string;
  maxValue: string;
  minVw: string;
  maxVw: string;
  defRem: string;
  addCalc: boolean;
}

const clampGenerator = ({
  minValue,
  maxValue,
  minVw,
  maxVw,
  defRem,
  addCalc
}: FormValues) => {
  let minValueInt = parseInt(minValue);
  let maxValueInt = parseInt(maxValue);
  let minVwInt = parseInt(minVw);
  let maxVwInt = parseInt(maxVw);
  let defRemInt = parseInt(defRem);

  let diffValues = maxValueInt - minValueInt;
  let diffVw = maxVwInt - minVwInt;
  let partialPreferred = 100 * diffValues;
  let preferredValue = partialPreferred / diffVw;

  let factor1 = minVwInt * maxValueInt;
  let factor2 = maxVwInt * minValueInt;

  let diffFactor = factor1 - factor2;
  let diffVwInverse = minVwInt - maxVwInt;
  let partialRelative = diffFactor / diffVwInverse;
  let relativeValue = partialRelative / defRemInt;

  let firstTerm = minValueInt / defRemInt;
  firstTerm = parseFloat(firstTerm.toFixed(3));
  let secondTerm = parseFloat(preferredValue.toFixed(3));
  let thirdTerm = parseFloat(relativeValue.toFixed(3));
  let fourthTerm = maxValueInt / defRemInt;
  fourthTerm = parseFloat(fourthTerm.toFixed(3));

  if (thirdTerm >= 0) {
    let clampFc = `clamp(${firstTerm}rem, ${secondTerm}vw + ${thirdTerm}rem, ${fourthTerm}rem)`;
    if(addCalc) {
      let calcClampFc = `calc(${clampFc})`
      return calcClampFc
    }
    else {
      return clampFc;
    }
  } else {
    thirdTerm = Math.abs(thirdTerm);
    let clampFc = `clamp(${firstTerm}rem, ${secondTerm}vw - ${thirdTerm}rem, ${fourthTerm}rem)`;
    if(addCalc) {
      let calcClampFc = `calc(${clampFc})`
      return calcClampFc
    } else {
      return clampFc;
    }
  }
};

export default clampGenerator;
