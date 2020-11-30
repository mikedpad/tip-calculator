import PropTypes from 'prop-types';
import { InputNumber } from 'antd';
import { useTipCalc } from '../../context/useTipCalc';

const ItemInput = ({ id, value }) => {
  const { updateItem } = useTipCalc();
  const updateFunc = v => updateItem({ id, value: v });

  return (
    <InputNumber
      value={value}
      size="large"
      inputMode="numeric"
      precision={2}
      onChange={updateFunc}
      onStep={updateFunc}
    />
  );
};

export default ItemInput;

ItemInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
