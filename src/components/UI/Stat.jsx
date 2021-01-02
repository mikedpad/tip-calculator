import PropTypes from 'prop-types';
import { Statistic } from 'antd';

const Stat = ({ value, title, prefix, suffix, isCurrency }) => {
  return (
    <Statistic
      value={value}
      title={title}
      prefix={prefix}
      suffix={suffix}
      precision={isCurrency ? 2 : null}
    />
  );
};

export default Stat;

Stat.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  isCurrency: PropTypes.bool,
};

Stat.defaultProps = {
  title: null,
  prefix: null,
  suffix: null,
  isCurrency: false,
};
