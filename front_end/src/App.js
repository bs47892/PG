import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Accessories from "./components/pages/Accessories";
import Authors from "./components/pages/Authors";
import Events from "./components/pages/Events";
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import BooksInAlbanian from "./components/pages/BooksInAlbanian";
import ForeignBooks from "./components/pages/ForeignBooks";
import LanguageTextbooks from "./components/pages/LanguageTextbooks";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import LogedIn from "./components/pages/LogedIn";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element ={<Home />}/>
        <Route exact path='/accessories' element ={<Accessories />}/>
        <Route exact path='/authors' element ={<Authors />}/>
        <Route exact path='/events' element ={<Events/>}/>
        <Route exact path='/books' element ={<Books />}/>
        <Route exact path='/booksinalbanian' element ={<BooksInAlbanian />}/>
        <Route exact path='/foreignbooks' element ={<ForeignBooks />}/>
        <Route exact path='/languagetextbooks' element ={<LanguageTextbooks />}/>
        <Route exact path='/login' element ={<Login />}/>
        <Route exact path='/LogedIn' element ={<LogedIn />}/>
        <Route exact path='/register' element ={<Register/>}/>

      </Routes>
      </Router>
  );
}

export default App;
