import InputValue from '../Item/InputValue';
import { DeleteItem } from '../UI';

const ItemData = item => {
  const { key, value } = item;
  const itemTip = calculateTip(tip, value);
  const onItemChange = debounce(v => updateItem(key)(v), 1000);

  return {
    key,
    value: <InputValue value={value} onChange={onItemChange} />,
    itemTip: format(itemTip),
    itemTotal: format(value + itemTip),
    delete: <DeleteItem onClick={() => deleteItem(key)} />,
  };
};

export default ItemData;
