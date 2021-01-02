import PropTypes from 'prop-types';
import { Slider } from 'antd';
import { useTipCalc } from '../../context/useTipCalc';

function formatTooltip(str) {
  return `${str}%`;
}

const sliderMarks = {
  0: `0`,
  100: `100`,
};

const InputSlider = ({ onChange }) => {
  const { tipPercent } = useTipCalc();
  return (
    <div style={{ overflowY: `auto` }}>
      <Slider
        min={0}
        max={100}
        marks={sliderMarks}
        step={1}
        included={false}
        tipFormatter={formatTooltip}
        onChange={onChange}
        defaultValue={tipPercent}
        style={{ margin: `16px 32px 32px` }}
      />
    </div>
  );
};

export default InputSlider;

InputSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
};
