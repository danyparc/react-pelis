import React, { Component } from 'react';
import './App.css';
import Peliculas from './components/Peliculas';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import SubirPeli from './components/SubirPeli';
import { BrowserRouter, Route } from 'react-router-dom';

// import 'bootstrap/dist/js/bootstrap';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Route exact path="/" component={Peliculas} />
          <Route path="/subir-pelicula" component={SubirPeli} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
