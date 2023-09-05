import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: #212121;
  font-size: 1.5em;
  font-weight: bold;
  &.active {
    color: palevioletred;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  text-transform: uppercase;
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </StyledList>
        <hr />
      </header>
      <main>
        <Suspense fallback={<div></div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
