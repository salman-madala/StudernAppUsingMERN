import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer position="top-center" />
      <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddEdit} />
          <Route path='/update/:id' component={AddEdit} />
          <Route path='/view/:id' component={View} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
