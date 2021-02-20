import { Col, Row, Table, Empty } from 'antd';
import Title from 'antd/lib/typography/Title';
import TipSlider from './UI/TipSlider';
import AppSettingsButton from './UI/Buttons/AppSettingsButton';
import Amount from './UI/Amount';
import { useTipCalc } from '../context/useTipCalc';
import InputCost from './UI/Fields/InputCost';
import DeleteItemButton from './UI/Buttons/DeleteItemButton';
import AddItemButton from './UI/Buttons/AddItemButton';

const currency = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: 2,
});

const TableFooter = () => <AddItemButton />;

const App = () => {
  const { items, evenSplit } = useTipCalc();
  const hasItems = items.length > 0;
  const total = items.reduce((acc, { cost, tip }) => acc + cost + tip, 0);

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
      <header
        style={{
          backgroundColor: `#e6e6ef`,
          boxShadow: `0 2px 8px rgba(0, 0, 0, 0.2)`,
          minHeight: 60,
          margin: `0 0 16px`,
          padding: `0 16px`,
          position: `fixed`,
          left: 0,
          right: 0,
          top: 0,
          zIndex: 3,
        }}
      >
        <Row align="middle" wrap={false}>
          <Col flex="auto">
            <Title style={{ margin: 0, fontSize: 32 }}>Tip Calculator</Title>
          </Col>
          <Col flex="0 1">
            <AppSettingsButton />
          </Col>
        </Row>
      </header>
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
      <footer
        style={{
          backgroundColor: `#e6e6ef`,
          bottom: 0,
          boxShadow: `0 -2px 8px rgba(0, 0, 0, 0.2)`,
          padding: `8px 16px 16px`,
          position: `fixed`,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <TipSlider />
        <Row align="middle" justify="center" wrap={false}>
          <Col flex="auto">
            <Amount label="Total" value={total} />
          </Col>
          {evenSplit && (
            <Col flex="auto">
              <Amount label="Split" value={total} />
            </Col>
          )}
        </Row>
      </footer>
    </>
  );
};

export default App;
