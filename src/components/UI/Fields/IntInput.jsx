import PropTypes from 'prop-types';
import { InputNumber } from 'antd';

const IntInput = ({ value, onChange, disabled }) => (
  <InputNumber
    defaultValue={value}
    size="medium"
    inputMode="numeric"
    disabled={disabled}
    precision={0}
    onChange={onChange}
    onStep={onChange}
    style={{ width: `auto` }}
  />
);
export default IntInput;

IntInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

IntInput.defaultProps = {
  disabled: false,
};
