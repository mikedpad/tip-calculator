import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce';
import TipSlider from './Interactable/TipSlider';
import Amount from './Text/Amount';
import { useTipCalc } from '../../context/useTipCalc';

const Footer = () => {
  const { total, split, setSplit } = useTipCalc();
  const splitEnabled = split > 1;
  const splitMinusOne = debounce(() => setSplit(split - 1), 50);
  const splitPlusOne = debounce(() => setSplit(split + 1), 50);
  return (
    <footer className="app-footer">
      <TipSlider />
      <div className="totals">
        <div className="totals-value">
          <Amount label="Total" value={total} />
        </div>
        <div className="totals-split">
          <div className="totals-split-remove">
            <Button
              type="default"
              shape="circle"
              size="small"
              icon={<MinusOutlined />}
              onClick={splitMinusOne}
            />
          </div>
          <Amount
            label={splitEnabled ? `Split (${split})` : `No Split`}
            value={splitEnabled ? total / split : null}
          />
          <div className="totals-split-add">
            <Button
              type="default"
              shape="circle"
              size="small"
              icon={<PlusOutlined />}
              onClick={splitPlusOne}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
