import './assets/css/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import UploadProcess from './pages/UploadProcess';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar/> */}
        <Switch>
          {/* Temporary home path nya langsung ke path Upload */}
          <Route exact path='/' component={UploadProcess}>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
