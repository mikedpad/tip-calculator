export default {
  truncate: value => parseFloat(parseFloat(value).toFixed(2)),
  round: value => Math.round((value * 10.0) / 10.0),
};
