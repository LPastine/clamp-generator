import { useForm } from '../../hooks/useForm';

function CalculatorForm() {
  // defining the initial state for the form
  const initialState = {
    minValue: 0,
    maxValue: 0,
    minVw: 0,
    maxVw: 0,
    defRem: 0,
  };

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(
    CalculatorFormCallback,
    initialState
  );

  // a submit function that will execute upon form submission
  async function CalculatorFormCallback() {
    const clampGenerator = () => {
      let minValue = values.minValue;
      let maxValue = values.maxValue;
      let minVw = values.minVw;
      let maxVw = values.maxVw;
      let defRem = values.defRem;

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
      } else {
        thirdTerm = Math.abs(thirdTerm);
        console.log(
          `clamp(${firstTerm}rem, ${secondTerm}vw - ${thirdTerm}rem, ${fourthTerm}rem)`
        );
      }
    };
    clampGenerator();
  }

  return (
    // don't mind this ugly form :P
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="minValue"
          id="minValue"
          type="minValue"
          placeholder="Minimum Value"
          onChange={onChange}
          required
        />

        <input
          name="maxValue"
          id="maxValue"
          type="maxValue"
          placeholder="Max Value"
          onChange={onChange}
          required
        />

        <input
          name="minVw"
          id="minVw"
          type="minVw"
          placeholder="Minimum Viewport Width"
          onChange={onChange}
          required
        />

        <input
          name="maxVw"
          id="maxVw"
          type="maxVw"
          placeholder="Maximum Viewport Width"
          onChange={onChange}
          required
        />

        <input
          name="defRem"
          id="defRem"
          type="defRem"
          placeholder="Default Rem Value"
          onChange={onChange}
          required
        />
        <button type="submit">Generate Clamp</button>
      </div>
    </form>
  );
}

export default CalculatorForm;
