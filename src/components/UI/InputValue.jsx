import { InputNumber } from 'antd';
import PropTypes from 'prop-types';

const InputValue = ({ value, onChange }) => {
  return (
    <InputNumber
      value={value}
      defaultValue={0}
      size="medium"
      inputMode="numeric"
      precision={2}
      onChange={onChange}
      onStep={onChange}
      style={{ width: `auto` }}
    />
  );
};

export default InputValue;

InputValue.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
