import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const AddItem = ({ onClick }) => {
  return (
    <Button
      type="primary"
      shape="round"
      icon={<PlusOutlined />}
      onClick={onClick}
      style={{ display: `block`, margin: `16px auto` }}
    >
      Add Item
    </Button>
  );
};

const DeleteItem = ({ onClick }) => {
  const deleteItem = () => {
    Modal.confirm({
      title: `Delete this item?`,
      icon: <ExclamationCircleOutlined />,
      okText: `Delete`,
      okType: `danger`,
      cancelText: `Cancel`,
      maskClosable: true,
      onOk() {
        onClick();
      },
    });
  };

  return (
    <Button shape="circle" danger icon={<DeleteOutlined />} type="primary" onClick={deleteItem} />
  );
};

AddItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

DeleteItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { AddItem, DeleteItem };
