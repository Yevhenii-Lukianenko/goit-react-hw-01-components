import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: 50px auto;
  width: 250px;
`;

export const ProfileDescription = styled.div`
  padding: 24px;
  text-align: center;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);
`;

export const Avatar = styled.img`
  margin-bottom: 12px;
  max-width: 100px;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 8px;
  color: gray;
  font-size: 12px;
`;

export const Location = styled.p`
  color: gray;
  font-size: 12px;
`;

export const ProfileStatsList = styled.ul`
  display: flex;
  text-align: center;
  background-color: #f3f6f4;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);
`;

export const StatItem = styled.li`
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-basis: calc(100% / 3);
`;

export const StatName = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: gray;
`;

export const StatQuantity = styled.span`
  display: block;
  font-size: 12px;
`;
