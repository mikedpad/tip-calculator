import { Slider } from 'antd';
import debounce from 'lodash/debounce';
import { useTipCalc } from '../../../context/useTipCalc';

function formatTip(value) {
  return `${value}%`;
}

const TipSlider = () => {
  const {
    tipRate,
    setTipRate,
    tipRange: [minTip, maxTip],
  } = useTipCalc();
  const onTipChange = debounce(v => setTipRate(v), 50);

  return (
    <div style={{ overflow: `auto` }}>
      <Slider
        min={minTip}
        max={maxTip}
        marks={{
          [minTip]: minTip,
          [maxTip]: maxTip,
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
