import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Item = ({ label, children }) => (
  <>
    <Typography component="h3" variant="overline">
      {label}:
    </Typography>
    {children}
  </>
);

export default Item;

Item.propTypes = {
  label: PropTypes.string.isRequired,
};
