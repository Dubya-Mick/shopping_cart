import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import ShoppingBucket from './components/ShoppingBucket';
import bucketList from './bucketList';
import './App.css';
import Item from './components/Item';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogue">
          <Catalogue bucketList={bucketList} />
        </Route> 
        <Route exact path="/shopping-bucket" component={ShoppingBucket} />
        <Route exact path="/catalogue/:bucketID">
          <Item />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
