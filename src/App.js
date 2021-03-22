import './App.css';
import Home from './component/shop/home';
import Login from './component/shop/login';
import Register from './component/shop/register';
import Purchase from './component/shop/purchase';
import {
  BrowserRouter as Router,
  Route,
   Link,
    Switch
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/home">HOME</Link>
        <Link to="/register">REGISTER</Link>
        <Link to="/login">LOGIN</Link>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route path="/login" component = {Login}></Route>
          <Route path="/purchase" component={Purchase}></Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
