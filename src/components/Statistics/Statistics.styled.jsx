import styled from '@emotion/styled';

export const StatisticContainer = styled.section`
  text-align: center;
  width: 350px;
  margin: 50px auto;
`;

export const StatisticTitle = styled.h2`
  padding: 25px 0;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

export const StatisticList = styled.ul`
  display: flex;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);
`;

export const StatisticItem = styled.li`
  padding: 10px 0;
`;

export const StatisticName = styled.span`
  display: block;
  margin-bottom: 4px;
  color: #fff;
  font-size: 12px;
`;

export const StatisticPercentage = styled.span`
  color: #fff;
  font-size: 12px;
`;
