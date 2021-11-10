import React from  'react';
import Navbar from './components/UI/Navbar/Navbar';
import './styles/App.css'
import AppRouter from './components/UI/AppRouter';


function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
