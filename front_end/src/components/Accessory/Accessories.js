import React, { useEffect, useState } from "react";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Accessory.css";
import axios from "axios";
import Accessory from "./Accessory";
import AddAccessory from "./AddAccessory";
const URL = "http://localhost:4000/accessories";

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data) 
}
const Accessories = () => {
    const [accessories, setAccessories]= useState();
   useEffect(()=>{
        
    fetchHandler().then(data => {setAccessories(data.accessories); console.log(data)})  

   },[]);
   console.log(accessories);
   return (
    <div className="bo">
      <ul>
        {accessories &&
          accessories.map((accessory, i) => (
            <li key={i}>
              <Accessory accessory={accessory} />
            </li>
          ))}
      </ul>
    
      <Button style={{maxWidth: '130px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', marginLeft: '50%', marginTop: '100px',  color: 'white', backgroundColor: 'rgb(80, 98, 255)'}} LinkComponent={Link} to={`/addaccessory`} sx={{ mt: "auto" }}>
       Add Accessory
      </Button>
     
      
    </div>
    
  );
};


export default Accessories;