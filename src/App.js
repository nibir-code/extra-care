import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/ErrorFound/NotFound";
import About from "./Components/About/About";



function App() {
  return (
    <div className="App">
       <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
