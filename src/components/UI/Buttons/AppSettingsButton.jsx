import { SettingOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Switch } from 'antd';
import debounce from 'lodash/debounce';
import clamp from 'lodash/clamp';
import { useTipCalc } from '../../../context/useTipCalc';
import IntInput from '../Fields/IntInput';

const { Item } = Form;

const SettingsModalButton = () => {
  const {
    showDetails,
    evenSplit,
    toggleEvenSplit,
    splitCount,
    setSplitCount,
    toggleDetails,
    tipRange: [minTip, maxTip],
    setTipRange,
  } = useTipCalc();
  const onMinTipChange = debounce(v => setTipRange([clamp(v, 0, maxTip), maxTip]), 50);
  const onMaxTipChange = debounce(v => setTipRange([minTip, clamp(v, minTip, 100)]), 50);

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
          <Item label="Even Split">
            <Switch defaultChecked={evenSplit} onChange={toggleEvenSplit} />
            <IntInput value={splitCount} onChange={setSplitCount} disabled={evenSplit} />
          </Item>
          <Item label="Min %">
            <IntInput value={minTip} onChange={onMinTipChange} />
          </Item>
          <Item label="Max %">
            <IntInput value={maxTip} onChange={onMaxTipChange} />
          </Item>
        </Form>
      ),
    });
  }

  return (
    <Button
      type=""
      shape="circle"
      size="large"
      icon={<SettingOutlined style={{ display: `block` }} />}
      onClick={showSettingsModal}
      style={{ boxShadow: `1px 2px 8px rgba(0, 0, 0, 0.3)`, margin: 8 }}
    />
  );
};

export default SettingsModalButton;
