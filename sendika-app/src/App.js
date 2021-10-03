import './assets/css/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
