import PropTypes from 'prop-types';
import { Slider } from 'antd';

const sliderMarks = {
  0: `0%`,
  20: ``,
  100: `100%`,
};

const InputSlider = ({ onChange }) => {
  return (
    <Slider
      min={0}
      max={100}
      marks={sliderMarks}
      step={1}
      onChange={onChange}
      defaultValue={20}
      style={{ margin: `16px 48px` }}
    />
  );
};

export default InputSlider;

InputSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
};
