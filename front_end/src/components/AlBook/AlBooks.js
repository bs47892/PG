import React, { useEffect, useState } from "react";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./AlBook.css";
import axios from "axios";
import AlBook from "./AlBook";
import AlAddBook from "./AlAddBook";
const URL = "http://localhost:4000/booksinalbanian";

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data) 
}
const AlBooks = () => {
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
              <AlBook book={book} />
            </li>
          ))}
      </ul>
    
      <Button style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', marginLeft: '50%', marginTop: '100px',  color: 'white', backgroundColor: 'rgb(80, 98, 255)'}} LinkComponent={Link} to={`/aladdbook`} sx={{ mt: "auto" }}>
       Add Book
      </Button>
     
      
    </div>
    
  );
};


export default AlBooks;