import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-left: 16px;
  width: 250px;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);
  border-radius: 6px;
`;

export const FriendStatus = styled.span`
  margin-right: 16px;
  width: 12px;
  height: 12px;
  border-radius: 50%;

  background-color: ${props => {
    switch (props.status) {
      case true:
        return 'green';
      case false:
        return 'tomato';
      default:
        return 'black';
    }
  }};
`;

export const FriendAvatar = styled.img`
  margin-right: 16px;
  padding: 8px 0;
`;

export const FriendName = styled.p``;
