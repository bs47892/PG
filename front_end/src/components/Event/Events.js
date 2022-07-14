import React, { useEffect, useState } from "react";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Event.css";
import axios from "axios";
import Event from "./Event";
import addEvent from "./AddEvent";
const URL = "http://localhost:4000/events";

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data) 
}
const Events = () => {
    const [events, setEvents]= useState();
   useEffect(()=>{

    fetchHandler().then(data => setEvents(data.events))  

   },[]);
   console.log(events);
   return (
    <div className="bo">
      <ul>
        {events &&
          events.map((event, i) => (
            <li key={i}>
              <Event event={event} />
            </li>
          ))}
      </ul>
      <Button style={{maxWidth: '110px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', marginLeft: '50%', marginTop: '100px',  color: 'white', backgroundColor: 'rgb(80, 98, 255)'}} LinkComponent={Link} to={`/addevent`} sx={{ mt: "auto" }}>
       Add Event
      </Button>
     
      
    </div>
    
  );
};


export default Events;