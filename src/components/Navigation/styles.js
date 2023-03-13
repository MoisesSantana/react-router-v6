import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #000000cc;
  cursor: pointer;

  &.active {
    color: #d400ff;
  }
`