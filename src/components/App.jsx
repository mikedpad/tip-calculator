import { Typography, Divider, Row, Col, Table, Empty, Tabs } from 'antd';
import debounce from 'lodash/debounce';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import InputValue from './Item/InputValue';
import InputSlider from './Item/InputSlider';
import { AddItem, DeleteItem } from './UI';
import Stat from './Item/Stat';

const { Title } = Typography;

function calculateTip(tip, value) {
  return tip * 0.01 * value;
}

const formatter = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: 2,
});
function format(value) {
  return formatter.format(value);
}

const itemizedCols = [
  {
    key: `value`,
    dataIndex: `value`,
    title: `Value`,
    width: null,
  },
  {
    key: `itemTip`,
    dataIndex: `itemTip`,
    title: `Tip`,
    width: 50,
  },
  {
    key: `itemTotal`,
    dataIndex: `itemTotal`,
    title: `Total`,
    width: 50,
  },
  {
    key: `delete`,
    dataIndex: `delete`,
    title: ``,
    width: 50,
  },
];

const App = () => {
  // State
  const [mode, setMode] = useState(`evenSplit`);
  const [tip, setTip] = useState(10);
  const [bill, setBill] = useState(0);
  const [items, setItems] = useState([]);

  // console.log(`mode:`, mode, `tip`, tip, `bill`, bill, `items`, items.length);

  // State Actions
  const deleteItem = key => setItems(items.filter(({ key: k }) => k !== key));
  const updateItem = key => value =>
    setItems(items.map(item => (item.key === key ? { key, value } : item)));
  const addItem = () => setItems([...items, { key: nanoid(), value: 0 }]);
  const onTipChange = debounce(v => setTip(v), 50);
  const onTabChange = debounce(v => setMode(v), 200);
  const onBillChange = debounce(v => setBill(v), 200);

  // Cached Calculations
  const subtotal = mode === `itemized` ? items.reduce((acc, { value }) => acc + value, 0) : bill;
  const tipTotal = calculateTip(tip, subtotal);
  const total = subtotal + tipTotal;

  // console.log(`subtotal`, subtotal, `tipTotal`, tipTotal, `total`, total);

  const tableDataItemized = items.map(item => {
    const { key, value } = item;
    const itemTip = calculateTip(tip, value);
    const itemTotal = value + itemTip;
    const onItemChange = debounce(v => updateItem(key)(v), 1000);

    return {
      key,
      value: <InputValue value={value} onChange={onItemChange} />,
      itemTip: format(itemTip),
      itemTotal: format(itemTotal),
      delete: <DeleteItem onClick={() => deleteItem(key)} />,
    };
  });

  return (
    <>
      <Title style={{ textAlign: `center`, display: `block` }}>Tip Mate</Title>
      <section className="items ui-wrapper">
        <Tabs defaultActiveKey={mode} centered onChange={onTabChange} type="card">
          <Tabs.TabPane tab="Itemized" key="itemized">
            {items.length > 0 ? (
              <Table dataSource={tableDataItemized} columns={itemizedCols} pagination={false} />
            ) : (
              <Empty description="No Items" />
            )}
            <Row justify="center" align="middle">
              <Col>
                <AddItem onClick={addItem} />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Even Split" key="evenSplit">
            <Row justify="center" align="middle">
              <Col>
                <InputValue value={bill} size="large" onChange={onBillChange} />
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </section>

      <section className="tip ui-wrapper">
        <Divider>Tip</Divider>
        <Row align="middle" justify="center">
          <Col flex="auto">
            <Stat title="Percent" suffix="%" value={tip} />
          </Col>
          <Col flex="auto">
            <Stat title="Amount" prefix="$" value={tipTotal} isCurrency />
          </Col>
        </Row>
        <InputSlider onChange={onTipChange} />
      </section>

      <section className="total ui-wrapper">
        <Divider>Total</Divider>
        <Stat title="Amount" prefix="$" value={total} isCurrency />
      </section>
    </>
  );
};

export default App;
