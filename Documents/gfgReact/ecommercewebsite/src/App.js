import Products from "./components/Products/Products";
import Header from "./components/Layout/header";
import Subheader from './components/Layout/subheader';

const App = () => {

  return (
    <div>
      <Header />
      <Subheader />
      <Products />
    </div>
  );
}

export default App;