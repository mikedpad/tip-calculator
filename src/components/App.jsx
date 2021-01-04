import { Divider, Typography, Table, Empty, Modal, Statistic, Button, Switch } from 'antd';
import debounce from 'lodash/debounce';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import InputValue from './UI/InputValue';
import InputSlider from './UI/InputSlider';
import { useTipCalc } from '../context/useTipCalc';

const { Title } = Typography;
const { Column } = Table;

const currency = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: 2,
});

const App = () => {
  const {
    items,
    setTipPercentage,
    createItem,
    updateItem,
    deleteItem,
    toggleEditMode,
    toggleItemTip,
    toggleItemTotal,
    calcTip,
    tipTotal,
    total,
    isEditEnabled,
    isItemTipEnabled,
    isItemTotalEnabled,
  } = useTipCalc();
  const onTipChange = debounce(v => setTipPercentage(v), 50);
  const onClickAddItem = () => createItem();
  const hasItems = items.length > 0;

  const tableDataItemized = items.map(item => {
    const { key, value } = item;
    const itemTip = calcTip(value);
    const itemTotal = value + itemTip;
    const onChangeItem = debounce(v => updateItem({ key, value: v }, 100));
    function onClickDelete() {
      Modal.confirm({
        title: `Delete item?`,
        icon: <ExclamationCircleOutlined />,
        okText: `Delete`,
        okType: `danger`,
        cancelText: `Cancel`,
        maskClosable: true,
        onOk() {
          if (items.length === 1) {
            toggleEditMode(false);
          }
          deleteItem(key);
        },
      });
    }

    return {
      key,
      value: <InputValue value={value} onChange={onChangeItem} />,
      itemTip: currency.format(itemTip),
      itemTotal: currency.format(itemTotal),
      delete: (
        <Button
          shape="circle"
          danger
          icon={<DeleteOutlined />}
          type="primary"
          onClick={onClickDelete}
        />
      ),
    };
  });

  return (
    <div style={{ textAlign: `center` }}>
      <Title>Tip Mate</Title>
      <section
        style={{
          maxWidth: 400,
          margin: `16px auto`,
        }}
      >
        {hasItems ? (
          <>
            <Table dataSource={tableDataItemized} pagination={false}>
              <Column title="Item Value" dataIndex="value" key="value" />
              {isItemTipEnabled && (
                <Column title="Tip" dataIndex="itemTip" key="itemTip" width={50} />
              )}
              {isItemTotalEnabled && (
                <Column title="Total" dataIndex="itemTotal" key="itemTotal" width={50} />
              )}
              {isEditEnabled && <Column title="" dataIndex="delete" key="delete" width={50} />}
            </Table>
            {isEditEnabled && (
              <Button
                type="primary"
                shape="round"
                icon={<PlusOutlined />}
                onClick={onClickAddItem}
                style={{ display: `block`, margin: `16px auto` }}
              >
                Add Another Item
              </Button>
            )}
          </>
        ) : (
          <>
            <Empty description="No Items" />
            <Button
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              onClick={onClickAddItem}
              style={{
                display: `block`,
                margin: `16px auto`,
              }}
            >
              Add An Item
            </Button>
          </>
        )}
        {isEditEnabled && (
          <>
            <div>
              Display Item Tip <Switch defaultChecked={isItemTipEnabled} onChange={toggleItemTip} />
            </div>
            <div>
              Display Item Total{` `}
              <Switch defaultChecked={isItemTotalEnabled} onChange={toggleItemTotal} />
            </div>
          </>
        )}
        {hasItems && (
          <Button
            type="primary"
            icon={isEditEnabled ? <SettingOutlined spin /> : <EditOutlined />}
            onClick={toggleEditMode}
            style={{
              display: `block`,
              margin: `16px auto`,
            }}
          >
            {isEditEnabled ? `Done Editing` : `Edit Items`}
          </Button>
        )}

        <Divider>Adjust Tip</Divider>
        <InputSlider onChange={onTipChange} />

        <Divider>Total</Divider>
        <Statistic value={total} prefix="$" precision={2} />
        <Statistic title="Tip" value={tipTotal} prefix="$" precision={2} />
      </section>
    </div>
  );
};

export default App;
