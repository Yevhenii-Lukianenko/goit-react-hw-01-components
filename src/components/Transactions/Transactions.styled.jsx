import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 50px auto;
  text-align: center;
  width: 500px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);
  border-radius: 6px;
  border-spacing: 1px 0;
  // border-collapse: collapse;
  overflow: hidden;
`;

export const Head = styled.thead`
  height: 30px;
  color: white;
  background-color: #40e0d0;
  font-size: 8px;
  text-transform: uppercase;
`;

export const CellHead = styled.th`
  &:first-of-type {
    text-align: left;
    padding-left: calc(100% / 3 / 2.5);
  }
`;

export const StringTable = styled.tr`
  height: 30px;
  background-color: white;
  &:nth-of-type(even) {
    background-color: #e9f5f4;
  }
`;

export const CellString = styled.td`
  width: calc(100% / 3);
  font-size: 8px;
  &:first-letter {
    text-transform: uppercase;
  }
  &:first-of-type {
    text-align: left;
    padding-left: calc(100% / 3 / 2.5);
  }
`;
