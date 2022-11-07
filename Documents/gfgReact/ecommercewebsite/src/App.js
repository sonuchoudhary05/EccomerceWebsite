import './App.css';
import Products from './components/Products/Products';
import Header from './components/Layout/header';
import SubHeader from './components/Layout/subheader';
import { useState } from 'react';
function App() {
  const [cartItems, setCartItems] = useState(0);
  const handleAddItem = () => {
    setCartItems(cartItems+1);
  }
  const handleRemoveItem = () => {
    setCartItems(cartItems-1);
  }
  return (
    <div>
      <Header count = {cartItems} />
      <SubHeader />
      <Products onAddItem = {handleAddItem} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;
