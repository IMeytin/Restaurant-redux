
import './App.css';
import Cart from './components/Cart/Cart';
import Dishes from './components/DishesComponent/Dishes';
import AllCategories from './components/Filters/AllCategories';

function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories />
        <Cart />
      </div>
      <div className="block">
        <Dishes />
      </div>
    </div>
  );
}

export default App;
