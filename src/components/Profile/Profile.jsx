import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  Avatar,
  Name,
  Tag,
  Location,
  ProfileStatsList,
  StatItem,
  StatName,
  StatQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <ProfileStatsList>
        <StatItem>
          <StatName>Followers</StatName>
          <StatQuantity>{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatName>Views</StatName>
          <StatQuantity>{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatName>Likes</StatName>
          <StatQuantity>{stats.likes}</StatQuantity>
        </StatItem>
      </ProfileStatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
