import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: inline-block;
`;

const Prefix = styled.span`
  font-size: 0.65rem;
`;

const Value = styled.span`
  font-size: 0.875rem;
`;

const Amount = ({ value }) => (
  <Container>
    <Prefix>$</Prefix>
    <Value>{value.toFixed(2)}</Value>
  </Container>
);

export default Amount;

Amount.propTypes = {
  value: PropTypes.number,
};

Amount.defaultProps = {
  value: 0,
};
