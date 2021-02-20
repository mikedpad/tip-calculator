import PropTypes from 'prop-types';

const Amount = ({ label, value }) => {
  const valueIsNumber = typeof value === `number`;
  return (
    <div className="amount">
      <div className="amount-label">
        <span style={{ color: `#999`, marginLeft: 12 }}>{label.toUpperCase()}</span>
      </div>
      <div className="amount-value">
        {valueIsNumber ? (
          <>
            <span style={{ color: `#666`, marginRight: 2 }}>$</span>
            <span style={{ fontSize: 20, color: `#333`, lineHeight: 1.1 }}>{value.toFixed(2)}</span>
          </>
        ) : (
          `Error`
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
