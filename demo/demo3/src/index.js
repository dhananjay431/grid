import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Hello from './Hello';
import Verbs from './Verbs';
import Words from './Words';
const mt={
  'margin-top':'56px'
}
const pos ={
  "position":'sticky',
  top:0,
  "z-index":2041
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <Link to="/" className="nav-link">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/verbs" className="nav-link">Verbs</Link>
          </li>
          <li className="nav-item">
            <Link to="/Words" className="nav-link">Words</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
    <div style={mt} className="d-inline">
    <Route path="/" exact component={Hello} />
    <Route path="/verbs" exact component={Verbs} />
    <Route path="/words" exact component={Words} />
    </div>
    
    </Router>
    
    );
  }
}
render(<App />, document.getElementById('root'));
