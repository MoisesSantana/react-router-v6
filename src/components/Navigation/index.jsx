import { StyledNavLink } from "./styles";

export function Navigation({ rote, title, index }) {
  return (
    <li>
      <StyledNavLink
        to={rote}
        end={index}
        className={({isActive}) => isActive && 'active'}
      >
        <span>{title}</span>
      </StyledNavLink>
    </li>
  );
}