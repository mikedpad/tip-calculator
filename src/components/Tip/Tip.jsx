import { Col, Row, Slider, Statistic, Divider } from 'antd';
import { useTipCalc } from '../../context/useTipCalc';

const Tip = () => {
  const { updateTip, items, tipPercent, calcTip } = useTipCalc();
  const handleTipChange = v => updateTip(v);
  const itemSubTotal = items.reduce((acc, { value }) => acc + value, 0);
  const tipTotal = calcTip(itemSubTotal);

  return (
    <section className="tip">
      <Divider>Tip</Divider>
      <Row>
        <Col span={18}>
          <Statistic title="Percent" suffix="%" value={tipPercent} />
        </Col>
        <Col span={6}>
          <Statistic title="Amount" prefix="$" value={tipTotal} precision={2} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slider min={0} max={100} onChange={handleTipChange} defaultValue={tipPercent} />
        </Col>
      </Row>
    </section>
  );
};

export default Tip;
