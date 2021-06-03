import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import ShoppingBucket from './components/ShoppingBucket';
import bucketList from './bucketList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalogue">
            <Catalogue bucketList={bucketList} />
          </Route> 
          <Route exact path="/shopping-bucket" component={ShoppingBucket} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
