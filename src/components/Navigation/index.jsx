import { StyledNavLink } from "./styles";

export function Navigation({ rote, title }) {
  return (
    <li>
      <StyledNavLink
        to={rote}
        className={({isActive}) => isActive && 'active'}
      >
        <span>{title}</span>
      </StyledNavLink>
    </li>
  );
}