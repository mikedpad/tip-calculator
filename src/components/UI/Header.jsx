import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="app-header">
    <h1 className="app-title">{title}</h1>
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
