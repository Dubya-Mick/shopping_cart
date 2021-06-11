import { useState } from 'react';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import ShoppingBucket from './components/ShoppingBucket';
import bucketList from './bucketList';
import './App.css';
import Item from './components/Item';


function App() {

  const [cartItems, setCartItems] = useState([]);

  const addItem = (newItem) => {
    // if already in cart, increment quantity by one
    if (cartItems.some(item => item.id === newItem.id)) {
      changeQty(newItem.id, 1);
    // otherwise add the item
    } else {
      setCartItems([...cartItems, newItem]);
    }
  }

  const deleteItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  }

  const changeQty = (id, change) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty + change };
      } 
      return item; 
    });
    setCartItems(updatedItems);
  }

  const cartQty = () => {
    const qty = cartItems.reduce((accumulator, item) => {
      return accumulator + item.qty;
    }, 0);
    return qty;
  }

  const total = () => {
    const total = cartItems
      .reduce((accumulator, item) => {
        const totalForItem = item.price * item.qty;
        return accumulator + totalForItem;
      }, 0)
      .toFixed(2);
    return total;
  }

  return (
    <div className="App">
      <NavBar 
        cartQty={cartQty}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogue">
          <Catalogue bucketList={bucketList} />
        </Route> 
        <Route exact path="/shopping-bucket">
          <ShoppingBucket 
            cartItems={cartItems}
            deleteItem={deleteItem}
            changeQty={changeQty}
            total={total}
          />
        </Route>
        <Route exact path="/catalogue/:bucketID">
          <Item 
            addItem={addItem}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
