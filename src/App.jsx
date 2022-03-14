import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Createnft from './components/Createnft';
import Walletconnect from './components/Walletconnect';
import ItemDetail from './components/ItemDetail';
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path='/' element={<Createnft/>} />
          </Routes>
          <Routes>
            <Route path='/itemdetails/:id' element={<ItemDetail/>} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
