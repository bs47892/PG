import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Accessories from "./components/Accessory/Accessories";
import AddAccessory from "./components/Accessory/AddAccessory"
import AccessoryDetail from "./components/Accessory/AccessoryDetail";
import Authors from "./components/Author/Authors";
import AddAuthor from "./components/Author/AddAuthor";
import AuthorDetail from "./components/Author/AuthorDetail";
import Events from "./components/pages/Events";
import Home from "./components/pages/Home";
import Books from "./components/Book/Books";
import AlBooks from "./components/AlBook/AlBooks";
import ForeignBooks from "./components/FBook/FBooks";
import LanguageTextbooks from "./components/LtBook/LtBooks";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import LogedIn from "./components/pages/LogedIn";
import AddBook from "./components/Book/AddBook";
import BookDetail from "./components/Book/BookDetail";
import AlAddBook from "./components/AlBook/AlAddBook";
import AlBookDetail from "./components/AlBook/AlBookDetail";
import LtAddBook from "./components/LtBook/LtAddBook";
import LtBookDetail from "./components/LtBook/LtBookDetail";
import FAddBook from "./components/FBook/FAddBook";
import FBookDetail from "./components/FBook/FBookDetail";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element ={<Home />}/>
        <Route exact path='/accessories' element ={<Accessories />}/>
        <Route exact path='/addaccessory' element ={<AddAccessory />}/>
        <Route exact path='/accessories/:id' element ={<AccessoryDetail />}/>
        <Route exact path='/authors' element ={<Authors />}/>
        <Route exact path='/events' element ={<Events/>}/>
        <Route exact path='/books' element ={<Books />}/>
        <Route exact path='/booksinalbanian' element ={<AlBooks />}/>
        <Route exact path='/foreignbooks' element ={<ForeignBooks />}/>
        <Route exact path='/languagetextbooks' element ={<LanguageTextbooks />}/>
        <Route exact path='/login' element ={<Login />}/>
        <Route exact path='/LogedIn' element ={<LogedIn />}/>
        <Route exact path='/register' element ={<Register/>}/>
        <Route exact path='/addbook' element ={<AddBook/>}/>
        <Route exact path='/addauthor' element ={<AddAuthor/>}/>
        <Route exact path='/authors/:id' element ={<AuthorDetail/>}/>
        <Route exact path='/books/:id' element ={<BookDetail/>}/>
        <Route exact path='/aladdbook' element ={<AlAddBook/>}/>
        <Route exact path='/booksinalbanian/:id' element ={<AlBookDetail/>}/>
        <Route exact path='/ltaddbook' element ={<LtAddBook/>}/>
        <Route exact path='/languagetextbooks/:id' element ={<LtBookDetail/>}/>
        <Route exact path='/faddbook' element ={<FAddBook/>}/>
        <Route exact path='/foreignbooks/:id' element ={<FBookDetail/>}/>
        

        


      </Routes>
      </Router>
  );
}

export default App;
