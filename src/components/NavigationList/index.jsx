import { Navigation } from "../Navigation";
import { ListContainer } from "./styles";

export function NavigationList() {
  return (
    <nav>
      <ListContainer>
        <Navigation rote="" title="Home" />
        <Navigation rote="characters" title="Characters" />
        <Navigation rote="locations" title="Locations" />
        <Navigation rote="episodes" title="Episodes" />
      </ListContainer>
    </nav>
  )
}