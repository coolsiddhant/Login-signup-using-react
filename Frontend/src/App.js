import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';

function App() {
  let auth=false;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login"> <Login /> </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/profile"><UserProfile /></Route>
      </Switch>
    </div>
  );
}

export default App;
