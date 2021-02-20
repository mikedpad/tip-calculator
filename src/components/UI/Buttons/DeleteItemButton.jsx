import PropTypes from 'prop-types';
import { DeleteOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Modal, Typography } from 'antd';
import { useTipCalc } from '../../../context/useTipCalc';

const { Text } = Typography;

const DeleteItemButton = ({ id, text }) => {
  const { deleteItem } = useTipCalc();

  function showDeleteModal() {
    Modal.warning({
      title: `Delete item?`,
      icon: <WarningOutlined />,
      okText: `Delete`,
      okType: `danger`,
      maskClosable: true,
      content: <Text>{text}</Text>,
      onOk() {
        deleteItem(id);
      },
    });
  }

  return (
    <Button
      shape="circle"
      danger
      icon={<DeleteOutlined />}
      type="primary"
      onClick={showDeleteModal}
    />
  );
};

export default DeleteItemButton;

DeleteItemButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
