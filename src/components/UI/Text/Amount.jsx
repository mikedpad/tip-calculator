import PropTypes from 'prop-types';

const Amount = ({ label, value }) => {
  const valueIsNumber = typeof value === `number`;
  return (
    <div className="amount">
      <div className="amount-label">
        <span className="label">{label.toUpperCase()}</span>
      </div>
      <div className="amount-value">
        {valueIsNumber ? (
          <>
            <span className="prefix">$</span>
            <span className="value">{value.toFixed(2)}</span>
          </>
        ) : (
          `---`
        )}
      </div>
    </div>
  );
};

export default Amount;

Amount.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
