import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from "./pages/Registration";
function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Login' exact component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/Product' component={Product} />
        <Route path='/Cart' component={Cart} />
        <Route path='/ProductList' component={ProductList} />
        <Route path='/Home' component={Navbar} />
        <Route path='/Registration' component={Registration}/>

      </Switch>
    </Router>
  );
  }
export default App;