import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../hellofresh-logo.svg';

export const LogoLink = styled(Link)`
  margin-left: auto;

  .logo {
    width: 50px;
  }
`;

const Logo = () => (
  <LogoLink to="/">
    <img src={`${logo}`} className="logo" alt="logo" />
  </LogoLink>
);

export default Logo;
