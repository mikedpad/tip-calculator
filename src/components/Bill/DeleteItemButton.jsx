import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useTipCalc } from '../../context/useTipCalc';

const { confirm } = Modal;

const DeleteItemButton = ({ id }) => {
  const { deleteItem } = useTipCalc();
  const removeFunc = () => {
    confirm({
      title: `Delete this item?`,
      icon: <ExclamationCircleOutlined />,
      okText: `Delete`,
      okType: `danger`,
      width: 300,
      cancelText: `Cancel`,
      maskClosable: true,
      onOk() {
        deleteItem(id);
      },
    });
  };

  return (
    <Button shape="circle" danger icon={<DeleteOutlined />} type="primary" onClick={removeFunc} />
  );
};

export default DeleteItemButton;

DeleteItemButton.propTypes = {
  id: PropTypes.string.isRequired,
};
