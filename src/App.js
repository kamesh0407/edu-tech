import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/homepage">
            <Homepage />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
