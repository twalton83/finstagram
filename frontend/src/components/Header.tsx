import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  background-color: #616f85;
  width: 100%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);

  h1 {
    font-weight: 300;
  }

  nav {
  }
  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h1>
        <NavLink to="/">Finstagram</NavLink>
      </h1>
      {/* TODO: Set up user context to conditionally render this buttons */}
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
}
