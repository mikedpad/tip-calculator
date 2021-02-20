import { SettingOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Switch } from 'antd';
import debounce from 'lodash/debounce';
import { useTipCalc } from '../../../context/useTipCalc';
import IntInput from '../Fields/IntInput';

const { Item } = Form;

const SettingsModalButton = () => {
  const { showDetails, split, setSplit, toggleDetails } = useTipCalc();
  const onSplitChange = debounce(v => setSplit(v), 50);

  function showSettingsModal() {
    Modal.info({
      title: `Settings`,
      icon: <SettingOutlined />,
      okText: `Close`,
      maskClosable: true,
      content: (
        <Form name="settings">
          <Item label="Show Details">
            <Switch defaultChecked={showDetails} onChange={toggleDetails} />
          </Item>
          <Item label="Split">
            <IntInput value={split} onChange={onSplitChange} />
          </Item>
        </Form>
      ),
    });
  }

  return (
    <Button
      type="default"
      shape="circle"
      size="large"
      icon={<SettingOutlined style={{ display: `block` }} />}
      onClick={showSettingsModal}
      style={{ boxShadow: `1px 2px 8px rgba(0, 0, 0, 0.3)`, margin: 8 }}
    />
  );
};

export default SettingsModalButton;
