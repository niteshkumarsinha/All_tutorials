import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import VendingMachine from "./VendingMachine";
// import Soda from "./Soda";
// import Sardines from "./Sardines";
// import Chips from "./Chips";
// import NavBar from "./NavBar";
// import Dog from "./Dog";
// import About from "./About";
// import Contact from "./Contact";
import Food from './Food';
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <NavLink exact activeClassName="active" to="/dog">Dog</NavLink >
        <NavLink exact activeClassName="active" to="/">About</NavLink >
        <NavLink exact activeClassName="active" to="/contact">Contact</NavLink >
      </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/dog" component={() => <Dog name="muffins"/>}  />
        <Route exact path="/contact" component={Contact} />
      </Switch> */}
      {/* <NavBar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
        <Route exact path="/chips" render={() => <Chips />} />
      </Switch> */}
      <Switch>
      <Route exact path="/food/:name" render={(routeProps) =>  <Food {...routeProps} /> } />
      <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
      <Route exact path="/" render={() => <FoodSearch />} />
      <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
