import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import TodoListApp from './component/TodoListApp';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/TodoListApp">Todo List</Link>
            </li>
          </ul>
          <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route exact path='/TodoListApp' element={< TodoListApp />}></Route>
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
