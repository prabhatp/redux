import './App.css'
import React from 'react';
import CounterTwo from './components/useReducer/CounterTwo';

// import ComponentOne from './components/useReducer/CounterOne';
// import ComponentOne from './components/useState/CounterOne';
// import ComponentC from './components/contextAPI/ComponentC';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Products from './Pages/Products';
// import Home from './Pages/Home';
// import Cart from './Pages/Cart';
// import { Provider } from 'react-redux';

// import store from './store/store';

function App() {
  return (
    <div className="App">
      <CounterTwo />
      {/* <ComponentOne /> */}
      {/* <UserContext.Provider value={"Prabhat"}>
        <ChannelContext.Provider value="codevolution">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Provider store={store}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products"element={<Products />}/>
            <Route path="/Cart"element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </Provider> */}
    </div>
  )
}

export default App
