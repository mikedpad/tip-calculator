import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce';
import { useTipCalc } from '../../../context/useTipCalc';

const PlusButton = () => {
  const { split, setSplit } = useTipCalc();
  const onClick = debounce(() => setSplit(split + 1), 50);

  return <Button shape="circle" icon={<PlusOutlined />} disabled={split > 9} onClick={onClick} />;
};

export default PlusButton;
