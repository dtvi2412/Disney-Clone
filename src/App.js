
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './Components/Detail';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Router> 
            <Header/>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/detail/:id">
                <Detail/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
      </Router>
 

    </div>
  );
}

export default App;
