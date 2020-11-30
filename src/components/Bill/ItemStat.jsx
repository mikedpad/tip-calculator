import PropTypes from 'prop-types';
import { Statistic } from 'antd';

const ItemStat = ({ title, value, prefix }) => {
  return <Statistic title={title} prefix={prefix} value={value} precision={2} />;
};

export default ItemStat;

ItemStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  prefix: PropTypes.string,
};

ItemStat.defaultProps = {
  prefix: `$`,
};
