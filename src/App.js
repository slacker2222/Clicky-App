import React, { Component } from 'react';
import Header from'./components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import './App.css'


//Game starts with a score of 0
//Score increases if image is clicked
//Score resets if same image is clicked twice
//Images resuffle after a image is clicked
//Game restarts if Score is 0




class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Nav />
        <Header />

        <Footer />
      </div>
    );
  }
}

export default App;
