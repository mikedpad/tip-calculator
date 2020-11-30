import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTipCalc } from '../../context/useTipCalc';

const AddItemButton = () => {
  const { createItem } = useTipCalc();

  return (
    <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={createItem}>
      Add Item
    </Button>
  );
};

export default AddItemButton;
