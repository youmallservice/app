import React from 'react';
import { Router} from 'react-router-dom'
import Routes from './routes'

import './App.css'
import history from './history'

import Nav from  './Components/navBar'
import Footer from  './Components/footer'

function App() {

  return (
    <div className="App">

      <Nav/>
      <div className="page-content">
        <Router history = {history}>
          <Routes/>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
