import { Navigation } from "../Navigation";
import { ListContainer } from "./styles";

export function NavigationList() {
  return (
    <nav>
      <ListContainer>
        <Navigation rote="" title="Home" index />
        <Navigation rote="characters" title="Characters" index={false} />
        <Navigation rote="locations" title="Locations" index={false} />
        <Navigation rote="episodes" title="Episodes" index={false} />
      </ListContainer>
    </nav>
  )
}