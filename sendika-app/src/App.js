import './assets/css/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import UploadProcess from './pages/UploadProcess';
import Home from './pages/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {/* Temporary home path nya langsung ke path Upload */}
          <Route exact path={['/', '/csv']}>
            <UploadProcess/>
            {/* <Home/> */}
          </Route>
          {/* <Route exact path={['/upload', '/upload/:slug']}>
            <UploadProcess/>
          </Route> */}

          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
