import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Demo1 from './components/demo1.js'
import Demo2 from './components/demo2.js'
import Demo3 from './components/demo3.js'
import './App.css';

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo1/">demo1</Link>
          </li>
          <li>
            <Link to="/demo2/">demo2</Link>
          </li>
          <li>
            <Link to="/demo3/">demo3</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} / >
      <Route path="/demo1/" component={Demo1} />
      <Route path="/demo2/" component={Demo2} />
      <Route path="/demo3/" component={Demo3} />
    </div>
  </Router>
);


export default AppRouter;
