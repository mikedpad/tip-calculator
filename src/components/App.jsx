import { Col, Row, Table, Empty } from 'antd';
import { useTipCalc } from '../context/useTipCalc';
import InputCost from './UI/Fields/InputCost';
import DeleteItemButton from './UI/Buttons/DeleteItemButton';
import AddItemButton from './UI/Buttons/AddItemButton';
import Header from './UI/Header';
import Footer from './UI/Footer';

const currency = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: 2,
});

const TableFooter = () => <AddItemButton />;

const App = () => {
  const { items } = useTipCalc();
  const hasItems = items.length > 0;

  const columns = [
    {
      title: `Cost`,
      dataIndex: `cost`,
      render: (v, { id }) => <InputCost id={id} value={v} />,
    },
    {
      title: `Tip`,
      dataIndex: `tip`,
      render: v => currency.format(v),
    },
    {
      title: `Subtotal`,
      dataIndex: `subtotal`,
      render: v => currency.format(v),
    },
    {
      title: ``,
      dataIndex: `id`,
      key: `delete`,
      width: 50,
      render: (v, { cost }) => <DeleteItemButton id={v} text={currency.format(cost)} />,
    },
  ];

  return (
    <>
      <Header title="Tip Calculator" />
      <main style={{ padding: `60px 0 120px` }}>
        <Row align="middle" justify="center">
          <Col flex="auto">
            {hasItems ? (
              <Table
                columns={columns}
                dataSource={items}
                rowKey={({ id }) => id}
                pagination={false}
                footer={TableFooter}
              />
            ) : (
              <>
                <Empty description="No Items" style={{ padding: `40px 0 20px` }} />
                <AddItemButton />
              </>
            )}
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  );
};

export default App;
