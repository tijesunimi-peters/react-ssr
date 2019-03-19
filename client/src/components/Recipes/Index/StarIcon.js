import React from 'react';

export default props => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="a11y--id a11y--id-desc">
    <title id="a11y--id" />
    <desc id="a11y--id-desc" />
    <g fill="none" fillRule="evenodd">
      <defs>
        <linearGradient id="half_grad">
          <stop offset="50%" stopColor="rgb(145, 193, 30)" />
          <stop offset="50%" stopColor="#ececec" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path d="M0 0h16v16H0z" />
      <path
        fill={`${
          props.half
            ? 'url(#half_grad)'
            : props.full
            ? 'rgb(145, 193, 30)'
            : '#ececec'
        }`}
        d="M8 11.646L11.708 14l-.981-4.44L14 6.576l-4.315-.39L8 2 6.315 6.185 2 6.575l3.273 2.986L4.292 14z"
      />
    </g>
  </svg>
);
