import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { InputNumber } from 'antd';
import { useTipCalc } from '../../../context/useTipCalc';

function clearIfZero(event) {
  const { target } = event;
  if (target.value === `0.00`) {
    target.value = ``;
  }
}

function disableEvent(event) {
  event.preventDefault();
}

function removeLastInput(target) {
  const { selectionStart, selectionEnd, value } = target;
  const s = value.toString();
  const newString = s.slice(0, selectionStart - 1) + s.slice(selectionEnd, s.length);
  return newString;
}

const regex = /^[0-9.]+$/;
function onInput(event) {
  const { data, target, inputType } = event.nativeEvent;
  const newValue = target.value;

  switch (inputType) {
    // Verify valid characters (numbers and decimal point)
    case `insertText`: {
      if (!data.match(regex)) {
        target.value = removeLastInput(target);
        return;
      }

      if (newValue.split(`.`).length > 2) {
        target.value = removeLastInput(target);
      }
      break;
    }
    // Don't analyze backspace input, reset to 0 if empty
    case `deleteContentBackward`:
      if (target.value.length < 1) {
        target.value = 0;
      }
      break;
    default:
      break;
  }
}

const InputCost = ({ id, value }) => {
  const { updateItem } = useTipCalc();
  const onChange = debounce(v => {
    if (v !== value) {
      updateItem({ id, cost: parseFloat(v) });
    }
  }, 100);

  return (
    <InputNumber
      defaultValue={value}
      size="medium"
      inputMode="numeric"
      precision={2}
      min={0}
      onClick={clearIfZero}
      onInput={onInput}
      onChange={onChange}
      onStep={onChange}
      onPaste={disableEvent}
      style={{ width: `auto` }}
    />
  );
};

export default InputCost;

InputCost.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
