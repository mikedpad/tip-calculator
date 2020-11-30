import { Space, Empty, Divider, List, Row, Col } from 'antd';
import { useTipCalc } from '../../context/useTipCalc';
import AddItemButton from './AddItemButton';
import ItemInput from './ItemInput';
import ItemStat from './ItemStat';
import DeleteItemButton from './DeleteItemButton';

const Items = () => {
  const { items, calcTip, calcWithTip } = useTipCalc();

  return (
    <section className="items">
      <Divider>Items</Divider>
      {items.length > 0 ? (
        <List
          size="small"
          dataSource={items}
          renderItem={({ id, value }) => (
            <List.Item>
              <Space size="middle" align="center" style={{ margin: `0 auto` }}>
                <ItemInput id={id} value={value} />
                <ItemStat title="Tip" value={calcTip(value)} />
                <ItemStat title="Subtotal" value={calcWithTip(value)} />
                <DeleteItemButton id={id} />
              </Space>
            </List.Item>
          )}
        />
      ) : (
        <Empty />
      )}
      <Row justify="center" align="middle" style={{ padding: `0.5rem 1rem` }}>
        <Col>
          <AddItemButton />
        </Col>
      </Row>
    </section>
  );
};

export default Items;
