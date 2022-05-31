import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import accessories from "./components/pages/accessories";
import Authors from "./components/pages/Authors";
import Events from "./components/pages/Events";
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import BooksInAlbanian from "./components/pages/BooksInAlbanian";
import ForeignBooks from "./components/pages/ForeignBooks";
import LanguageTextbooks from "./components/pages/LanguageTextbooks";
import LogIn from "./components/pages/LogIn";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element ={<Home />} exact/>
        <Route path='/accessories' element ={<accessories/>} exact/>
        <Route path='/Authors' element ={<Authors/>} exact/>
        <Route path='/Events' element ={<Events/>} exact/>
        <Route path='/Books' element ={<Books/>} exact/>
        <Route path='/BooksInAlbanian' element ={<BooksInAlbanian/>} exact/>
        <Route path='/ForeignBooks' element ={<ForeignBooks/>} exact/>
        <Route path='/LanguageTextbooks' element ={<LanguageTextbooks/>} exact/>
        <Route path='/LogIn' element ={<LogIn/>} exact/>

      </Routes>
      </Router>
  );
}

export default App;
