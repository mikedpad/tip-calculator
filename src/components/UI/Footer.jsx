import styled from 'styled-components/macro';
import TipSlider from './Interactable/TipSlider';
import { useTipCalc } from '../../context/useTipCalc';
import MinusButton from './Buttons/MinusButton';
import PlusButton from './Buttons/PlusButton';

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

const Results = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Amount = styled.div`
  flex: 1 0;
  padding: 0 0.5rem;
  text-align: center;
`;

const AmountLabel = styled.div`
  color: #999;
  font-size: 16px;
`;
const AmountValue = styled.div`
  display: block;
  padding: 0 0.5rem;
`;
const Prefix = styled.span`
  color: #666;
  font-size: 16px;
`;
const Value = styled.span`
  color: #333;
  font-size: 6vw;
  line-height: 1.1;
`;

const ValueFlex = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Footer = () => {
  const { total, split } = useTipCalc();
  const splitEnabled = split > 1;
  return (
    <Container>
      <TipSlider />
      <Results>
        <Amount>
          <AmountLabel>Total</AmountLabel>
          <AmountValue>
            <Prefix>$</Prefix>
            <Value>{total.toFixed(2)}</Value>
          </AmountValue>
        </Amount>
        <Amount>
          <AmountLabel>{splitEnabled ? `Split (${split})` : `No Split`}</AmountLabel>
          <ValueFlex>
            <MinusButton />
            {splitEnabled && (
              <AmountValue>
                <Prefix>$</Prefix>
                <Value>{(total / split).toFixed(2)}</Value>
              </AmountValue>
            )}
            <PlusButton />
          </ValueFlex>
        </Amount>
      </Results>
    </Container>
  );
};

export default Footer;
