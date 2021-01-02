import { InputNumber } from 'antd';
import PropTypes from 'prop-types';

const InputValue = ({ value, onChange, onStep }) => {
  return (
    <InputNumber
      value={value}
      defaultValue={0}
      size="medium"
      inputMode="numeric"
      precision={2}
      onChange={onChange}
      onStep={onStep || onChange}
      style={{ width: `auto` }}
    />
  );
};

export default InputValue;

InputValue.propTypes = {
  value: PropTypes.number.isRequired,
  // size: PropTypes.oneOf([`large`, `middle`, `small`]),
  onChange: PropTypes.func.isRequired,
  onStep: PropTypes.func,
};

InputValue.defaultProps = {
  // size: `middle`,
  onStep: null,
};
