import React, { useEffect, useState } from "react";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Author.css";
import axios from "axios";
import Author from "./Author";
import AddAuthor from "./AddAuthor";
const URL = "http://localhost:4000/authors";

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data) 
}
const Authors = () => {
    const [authors, setAuthors]= useState();
   useEffect(()=>{

    fetchHandler().then(data => setAuthors(data.authors))  

   },[]);
   console.log(authors);
   return (
    <div className="bo">
      <ul>
        {authors &&
          authors.map((author, i) => (
            <li key={i}>
              <Author author={author} />
            </li>
          ))}
      </ul>
    
      <Button style={{maxWidth: '120px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', marginLeft: '50%', marginTop: '100px',  color: 'white', backgroundColor: 'rgb(80, 98, 255)'}} LinkComponent={Link} to={`/addauthor`} sx={{ mt: "auto" }}>
       Add Author
      </Button>
     
      
    </div>
    
  );
};


export default Authors;