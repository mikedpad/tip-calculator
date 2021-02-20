import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useTipCalc } from '../../../context/useTipCalc';

const AddItemButton = () => {
  const { createItem } = useTipCalc();

  const onClickAddItem = () => createItem();
  return (
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
      Add Item
    </Button>
  );
};

export default AddItemButton;
