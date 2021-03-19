import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Empty = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 40px 0 20px;
`;

const IconDiv = styled.div`
  height: 100px;
  margin-bottom: 16px;
`;
const IconSVG = styled.svg`
  fill: #f2f2f2;
  stroke: #333;
  stroke-width: 2;
  height: 100px;
  filter: drop-shadow(2px 1px 0 rgba(0, 0, 0, 0.2));
  // width: 100px;
`;
const EmptyText = styled.p`
  display: block;
  font-size: 24px;
  margin: 0;
`;

const EmptyList = ({ text }) => (
  <Empty>
    <IconDiv>
      <IconSVG xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 532 532" alt="Empty List">
        <path d="M512 256c0 68.38-26.63 132.67-74.98 181.02C388.67 485.37 324.38 512 256 512c-47.87 0-93.72-13.07-133.52-37.48l29.35-29.35A214.67 214.67 0 00256 472c119.1 0 216-96.9 216-216 0-37.75-9.74-73.26-26.83-104.17l29.35-29.35C498.93 162.28 512 208.13 512 256zM29.14 511.14L.86 482.86l60.53-60.53C21.67 376 0 317.67 0 256c0-68.38 26.63-132.67 74.98-181.02C123.33 26.63 187.62 0 256 0c61.67 0 120 21.67 166.33 61.39L482.86.86l28.28 28.28zm60.71-117.28l304.01-304A215 215 0 00256 40C136.9 40 40 136.9 40 256a215 215 0 0049.85 137.86z" />
      </IconSVG>
    </IconDiv>
    <EmptyText>{text}</EmptyText>
  </Empty>
);

export default EmptyList;

EmptyList.propTypes = {
  text: PropTypes.string.isRequired,
};
