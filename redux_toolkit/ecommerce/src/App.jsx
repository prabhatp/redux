import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Contact, Home, About, Products, Cart } from './Pages';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
