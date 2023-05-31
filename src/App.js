import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import './App.css';

function App() {
  return (
    <AppProvider>
    <div className="App">
      <h1>Shopping App</h1>
      <div style={{display:'flex',gap:'20px'}}> 
      <CartValue className="item" />
      <Location className="item"/>
      </div>
    
      <ExpenseList />
      <ItemSelected />
    </div>
    </AppProvider>
  );
}

export default App;
