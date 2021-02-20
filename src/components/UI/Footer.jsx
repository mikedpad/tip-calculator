import PropTypes from 'prop-types';
import TipSlider from './Interactable/TipSlider';
import Amount from './Text/Amount';

const Footer = ({ total, split }) => {
  const splitEnabled = split > 1;
  return (
    <footer
      style={{
        backgroundColor: `#e6e6ef`,
        bottom: 0,
        boxShadow: `0 -2px 8px rgba(0, 0, 0, 0.2)`,
        padding: `8px 16px 16px`,
        position: `fixed`,
        left: 0,
        right: 0,
        zIndex: 2,
      }}
    >
      <TipSlider />
      <div className="totals">
        <div className="totals-value">
          <Amount label="Total" value={total} />
        </div>
        <div className="totals-split">
          <Amount
            // label={splitEnabled ? `Split In ${split}` : `No Split`}
            label={splitEnabled ? `${split}-Way Split` : `No Split`}
            value={splitEnabled ? total / split : null}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  total: PropTypes.number.isRequired,
  split: PropTypes.number.isRequired,
};
