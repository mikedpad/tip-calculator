import { Slider } from 'antd';
import styled from 'styled-components/macro';
import debounce from 'lodash/debounce';
import { useTipCalc } from '../../../context/useTipCalc';

const SliderContainer = styled.div`
  overflow: auto;
`;
const PaddedSlider = styled(Slider)`
  margin: 8px 32px 32px;
`;

function formatTip(value) {
  return `${value}%`;
}

const TipSlider = () => {
  const { tipRate, setTipRate } = useTipCalc();
  const onTipChange = debounce(v => setTipRate(v), 50);

  return (
    <SliderContainer>
      <PaddedSlider
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
      />
    </SliderContainer>
  );
};

export default TipSlider;
