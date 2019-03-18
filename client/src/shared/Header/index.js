import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';
import Loader from '../Loader';

export const NavLink = styled(Link)`
  margin-right: 20px;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavItem = styled.li`
  color: grey;
  margin-right: 20px;

  &.mod-about {
    margin-left: auto;
  }
`;

export default () => {
  return (
    <div className="hf-wrapper mod-nav">
      <div className="hf-container">
        <header className="hf-header">
          <nav className="nav">
            <Loader
              render={() => (
                <NavItems>
                  <React.Fragment>
                    <NavItem>
                      <Logo to="/" />
                    </NavItem>
                    <NavItem className="mod-about">
                      <NavLink to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>Contact</NavItem>
                  </React.Fragment>
                </NavItems>
              )}
            />
          </nav>
        </header>
      </div>
    </div>
  );
};
