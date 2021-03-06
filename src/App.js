import './App.css';
import Home from './component/shop/home';
import Login from './component/shop/login';
import Register from './component/shop/register';
import Purchase from './component/shop/purchase';
import Cart from './component/shop/cart';
import {
  BrowserRouter as Router,
  Route,
   Link,
    Switch
} from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link to="/home">HOME</Link>
            </li>
            <li class="nav-item">
            <Link to="/register">REGISTER</Link>
            </li>
            <li class="nav-item">
            <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <div>
        {/* <Link to="/home">HOME</Link>
        <Link to="/register">REGISTER</Link>
        <Link to="/login">LOGIN</Link> */}
        {/* <Link to="/cart" >CART</Link> */}
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route path="/login" component = {Login}></Route>
          <Route path="/purchase" component={Purchase}></Route>
          <Route exact path="/cart" component={Cart}></Route>
        </Switch>
        
      </div>
    </Router>
    </div>
  );
}

export default App;
