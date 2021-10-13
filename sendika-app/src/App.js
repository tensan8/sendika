import './assets/css/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import UploadProcess from './pages/UploadProcess';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import ChooseModel from './pages/ChooseModel';
import SingleSmileOutput from './pages/SingleSmileOutput';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {/* Temporary home path nya langsung ke path Upload */}
          <Route exact path={"/"}>
            <Home/>
          </Route>

          <Route exact path={['/csv', '/singleSmile']}>
            <UploadProcess/>
          </Route>

          <Route exact path="/ChooseModel">
            <ChooseModel />
          </Route>

          <Route exact path="/SingleSmileOutput">
            <SingleSmileOutput />
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
