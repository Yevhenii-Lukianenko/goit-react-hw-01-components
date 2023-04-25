import PropTypes from 'prop-types';
import {
  StatisticContainer,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticName,
  StatisticPercentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticContainer>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
              flexBasis: `calc(100% / ${stats.length})`,
            }}
          >
            <StatisticName>{stat.label}</StatisticName>
            <StatisticPercentage>{stat.percentage}%</StatisticPercentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
