import { Slider } from 'antd';
import debounce from 'lodash/debounce';
import { useTipCalc } from '../../../context/useTipCalc';

function formatTip(value) {
  return `${value}%`;
}

const TipSlider = () => {
  const { tipRate, setTipRate } = useTipCalc();
  const onTipChange = debounce(v => setTipRate(v), 50);

  return (
    <div style={{ overflow: `auto` }}>
      <Slider
        min={0}
        max={100}
        marks={{
          0: 0,
          100: 100,
        }}
        step={1}
        included={false}
        tipFormatter={formatTip}
        onAfterChange={onTipChange}
        defaultValue={tipRate}
        style={{ margin: `8px 32px 32px` }}
      />
    </div>
  );
};

export default TipSlider;
