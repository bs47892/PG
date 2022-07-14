import React, { useEffect, useState } from "react";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
import AddBook from "./AddBook";
const URL = "http://localhost:4000/books";

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data) 
}
const Books = () => {
    const [books, setBooks]= useState();
   useEffect(()=>{

    fetchHandler().then(data => setBooks(data.books))  

   },[]);
   console.log(books);
   return (
    <div className="bo">
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
      <Button style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', marginLeft: '50%', marginTop: '100px',  color: 'white', backgroundColor: 'rgb(80, 98, 255)'}} LinkComponent={Link} to={`/addbook`} sx={{ mt: "auto" }}>
       Add Book
      </Button>
     
      
    </div>
    
  );
};


export default Books;