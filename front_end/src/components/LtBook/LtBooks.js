import React, { useEffect, useState } from "react";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./LtBook.css";
import axios from "axios";
import LtBook from "./LtBook";
import LtAddBook from "./LtAddBook";
const URL = "http://localhost:4000/languagetextbooks";

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data) 
}
const LtBooks = () => {
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
              <LtBook book={book} />
            </li>
          ))}
      </ul>
    
      <Button style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', marginLeft: '50%', marginTop: '100px',  color: 'white', backgroundColor: 'rgb(80, 98, 255)'}} LinkComponent={Link} to={`/ltaddbook`} sx={{ mt: "auto" }}>
       Add Book
      </Button>
     
      
    </div>
    
  );
};


export default LtBooks;