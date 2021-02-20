import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';
import AppSettingsButton from './Buttons/AppSettingsButton';

const { Title } = Typography;

const Header = ({ title }) => (
  <header
    style={{
      backgroundColor: `#e6e6ef`,
      boxShadow: `0 2px 8px rgba(0, 0, 0, 0.2)`,
      minHeight: 60,
      margin: `0 0 16px`,
      padding: `0 16px`,
      position: `fixed`,
      left: 0,
      right: 0,
      top: 0,
      zIndex: 3,
    }}
  >
    <Row align="middle" wrap={false}>
      <Col flex="auto">
        <Title style={{ margin: 0, fontSize: 32 }}>{title}</Title>
      </Col>
      <Col flex="0 1">
        <AppSettingsButton />
      </Col>
    </Row>
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
