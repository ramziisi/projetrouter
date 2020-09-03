import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import Apropos from './component/Apropos';
import Blog from './component/Blog';
import Login, { Loding } from './component/Loding';
import Article from './component/Article';
import {BrowserRouter as Router, Route}  from 'react-router-dom';


function App() {
  
  return (
    <div className="container">
      <Router>
      <Nav />
      <Route path='/' exact component={Home} />
      <Route path='/Apropos' component={Apropos} />
      <Route path='/Blog' exact component={Blog} />
      <Route path='/Blog/:id' component={Article} />
      <Route path='/Loding' component={Loding} />
      

      </Router>
    </div>
  );
}

export default App;
