import React from 'react';
import StarIcon from './StarIcon';
import styled from 'styled-components';

const Star = styled.div``;

export const NoRating = () =>
  Array(5).map((_, i) => {
    return (
      <Star key={`${i}_grey`}>
        <StarIcon />
      </Star>
    );
  });

export const Rating = ({ rating }) => {
  const [whole, half] = rating.toString().split('.');

  const remainder = Math.floor(5 - rating);

  let stars = [];

  Array(parseInt(whole, 10))
    .fill()
    .forEach((_, i) => {
      stars.push(
        <Star key={`${i}_full`}>
          <StarIcon full />
        </Star>
      );
    });

  if (half)
    stars.push(
      <Star key="half">
        <StarIcon half />
      </Star>
    );

  if (remainder > 0) {
    Array(remainder)
      .fill()
      .forEach((_, i) => {
        stars.push(
          <Star key={`${i}_grey`}>
            <StarIcon />
          </Star>
        );
      });
  }

  return stars;
};
