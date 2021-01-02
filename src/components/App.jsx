import { Divider, Typography, Table, Empty } from 'antd';
import debounce from 'lodash/debounce';
import InputValue from './UI/InputValue';
import InputSlider from './UI/InputSlider';
import Stat from './UI/Stat';
import { AddItem, DeleteItem } from './UI';
import { useTipCalc } from '../context/useTipCalc';

const { Title } = Typography;

const formatter = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: 2,
});

function formatCurrency(value) {
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
  const {
    items,
    setTipPercentage,
    createItem,
    updateItem,
    deleteItem,
    calcTip,
    tipTotal,
    total,
  } = useTipCalc();
  const onTipChange = debounce(v => setTipPercentage(v), 50);
  const onClickAddItem = () => createItem();

  const tableDataItemized = items.map(item => {
    const { key, value } = item;
    const itemTip = calcTip(value);
    const itemTotal = value + itemTip;
    const onChangeItem = debounce(v => updateItem({ key, value: v }, 100));
    const onClickDelete = () => deleteItem(key);

    return {
      key,
      value: <InputValue value={value} onChange={onChangeItem} />,
      itemTip: formatCurrency(itemTip),
      itemTotal: formatCurrency(itemTotal),
      delete: <DeleteItem onClick={onClickDelete} />,
    };
  });

  return (
    <>
      <Title style={{ textAlign: `center` }}>Tip Mate</Title>
      <section
        style={{
          maxWidth: 400,
          margin: `16px auto`,
        }}
      >
        {items.length > 0 ? (
          <Table dataSource={tableDataItemized} columns={itemizedCols} pagination={false} />
        ) : (
          <Empty description="No Items" />
        )}

        <AddItem onClick={onClickAddItem} />

        <Divider>Adjust Tip</Divider>
        <InputSlider onChange={onTipChange} />

        <Divider>Total</Divider>
        <Stat title="Tip" prefix="$" value={tipTotal} isCurrency />
        <Stat title="Amount" prefix="$" value={total} isCurrency />
      </section>
    </>
  );
};

export default App;
