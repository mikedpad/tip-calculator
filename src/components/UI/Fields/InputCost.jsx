import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import debounce from 'lodash/debounce';
import { useTipCalc } from '../../../context/useTipCalc';

const NumberInput = styled.input`
  background-color: #fafafa;
  border: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.125rem;
  outline: 0;
  padding: 0 0 0 0.5rem;
  text-align: left;
  touch-action: none;
  width: 100%;
`;

// function onFocus(event) {
//   const { target } = event;
//   target.scrollIntoView({ behavior: `smooth`, block: `end`, inline: `nearest` });
// }

function preventDefault(event) {
  event.stopPropagation();
}

const InputCost = ({ id, value }) => {
  const { updateItem } = useTipCalc();
  const onChange = debounce(event => {
    const { target } = event;
    if (value !== target.value) {
      const cost = parseFloat(target.value).toFixed(2);
      updateItem({ id, cost: parseFloat(cost) });
      target.value = cost;
    }
  }, 750);

  return (
    <NumberInput
      id={id}
      inputMode="numeric"
      role="spinbutton"
      type="number"
      autoComplete="off"
      aria-valuemin={0}
      min={0}
      step={1}
      defaultValue={value}
      // onFocus={onFocus}
      onChange={onChange}
      onPaste={preventDefault}
    />
  );
};

export default InputCost;

InputCost.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
