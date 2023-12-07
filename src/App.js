import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from './components/user/Registration';
import Login from './components/user/Login';
import { AuthProvider } from './context/AuthContext';
import Home from './components/home/Home';
import CreateTransaction from './components/trans/CreateTransaction'
import Transactions from './components/trans/Transactions';
import Navbar from './components/home/Navbar';

function App() {
  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <Navbar/>
        <ToastContainer className="App"/>
        <Routes>
          <Route path='/' element = { <Home/>} />
          <Route path='/register' element ={ <Registration/>} />
          <Route path='/login' element = { <Login/>} />
          <Route path='/create' element ={ <CreateTransaction/>}/>
          <Route path='/transaction'  element = { <Transactions/>}/>
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
