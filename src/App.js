import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customer";
import Rentals from "./components/rentals";
import ObjectForm from "./components/objectForm";
import Objects from "./components/objects";
import NotFound from "./components/notFound";
import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={ObjectForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies" component={Objects} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
