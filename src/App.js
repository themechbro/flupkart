import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Appbar from './components/appbar';
import bootstrap from 'bootstrap'
import Product
 from './components/product';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Appbar/>
     <Product/>
    </div>
  </Provider>
  );
}

export default App;
