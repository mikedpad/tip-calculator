import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const Header = ({ title }) => (
  <header className="app-header">
    <Title className="app-title" style={{ margin: 0, fontSize: 32 }}>
      {title}
    </Title>
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
