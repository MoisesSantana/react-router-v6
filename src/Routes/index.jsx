import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";
import { Episodes } from "../pages/Episodes";
import { Locations } from "../pages/Locations";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/episodes" component={Episodes} />
      <Route exact path="/locations" component={Locations} />
    </Switch>
  )
}