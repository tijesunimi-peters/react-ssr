import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FavoriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #91c11e;
  background-color: white;
  cursor: pointer;
`;

const SVG = styled.svg`
  position: absolute;
`;

export const Count = styled.span`
  display: inline-flex;
  position: absolute;
  top: 0;
  right: -10px;
  text-align: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

/**
 * @class
 * @description Stateless component for Favorite
 * @prop {number} count favorite counts
 * @prop {bool} paint fills svg path with #91c11e on true and #fff on false
 * @prop {func} onClick handles click event for favoriting or unfavoriting the recipe
 */
const FavoriteContainer = ({ count, paint, onClick }) => {
  return (
    <FavoriteWrapper onClick={onClick}>
      <SVG
        width="28.8"
        height="24"
        viewBox="0 0 24 20"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="">
        <title />
        <desc />
        <path
          d="M12.2204462,6.73523319 C12.1365545,6.90041775 12.0637047,7.10799331 11.9999269,7.34869081 C11.9361948,7.10799331 11.8632076,6.90041775 11.7793159,6.73523319 C10.5709724,4.35444956 7.51174163,3.33400439 4.9463771,4.45560119 C2.38247872,5.57685784 1.28240188,8.4150135 2.49069953,10.7956696 C3.69885972,13.1762406 11.9979109,20 11.9979109,20 C12.0018054,20 20.3009482,13.1762406 21.5090167,10.7956696 C22.7173602,8.4150135 21.6188411,5.57685784 19.0532933,4.45560119 C16.4887077,3.33400439 13.428698,4.35444956 12.2204462,6.73523319 Z"
          fill={`${paint ? '#91c11e' : '#fff'}`}
          stroke="#91c11e"
          strokeWidth="1"
          fillRule="evenodd"
        />
      </SVG>
      {count > 0 && <Count>{count}</Count>}
    </FavoriteWrapper>
  );
};

FavoriteContainer.propType = {
  count: PropTypes.number,
  paint: PropTypes.bool,
  onClick: PropTypes.func,
};

FavoriteContainer.defaultValue = {
  count: 0,
  paint: false,
  onClick: () => {},
};

export default FavoriteContainer;
