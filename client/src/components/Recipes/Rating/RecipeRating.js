import React from 'react';
import StarIcon from './StarIcon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Stars = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  span {
    display: inline-flex;
    margin-left: 5px;
  }
`;

export const Star = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NoRating = ({ starSize, className, onClick = () => {} }) => (
  <Stars className={className}>
    {Array(5)
      .fill()
      .map((_, i) => {
        return (
          <Star key={`${i}_grey`} onClick={onClick(i + 1)}>
            <StarIcon width={starSize} height={starSize} />
          </Star>
        );
      })}
  </Stars>
);

export const Rating = ({
  rating,
  className,
  starSize = '16',
  label,
  onClick = () => {},
}) => {
  if (rating === 0)
    return (
      <NoRating className={className} starSize={starSize} onClick={onClick} />
    );

  const [whole, half] = rating.toString().split('.');

  const remainder = Math.floor(5 - rating);

  let stars = [];
  let starCount = 0;

  Array(parseInt(whole, 10))
    .fill()
    .forEach((_, i) => {
      starCount++;

      stars.push(
        <Star key={`${i}_full`} onClick={onClick(starCount)}>
          <StarIcon full width={starSize} height={starSize} />
        </Star>
      );
    });

  if (half) {
    stars.push(
      <Star key="half" onClick={onClick(++starCount)}>
        <StarIcon half width={starSize} height={starSize} />
      </Star>
    );
  }

  if (remainder > 0) {
    Array(remainder)
      .fill()
      .forEach((_, i) => {
        starCount++;
        stars.push(
          <Star key={`${i}_grey`} onClick={onClick(starCount)}>
            <StarIcon width={starSize} height={starSize} />
          </Star>
        );
      });
  }

  return (
    <Stars className={className}>
      {stars}
      {label ? <span>Rated {rating} / 5</span> : null}
    </Stars>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
