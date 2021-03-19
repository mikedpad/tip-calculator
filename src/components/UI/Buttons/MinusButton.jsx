import { Button } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce';
import { useTipCalc } from '../../../context/useTipCalc';

const MinusButton = () => {
  const { split, setSplit } = useTipCalc();
  const onClick = debounce(() => setSplit(split - 1), 50);

  return <Button shape="circle" icon={<MinusOutlined />} disabled={split < 2} onClick={onClick} />;
};

export default MinusButton;
