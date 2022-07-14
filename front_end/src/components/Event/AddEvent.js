import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddEvent = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      place:"",
      date:"",
      description: "",
      price: "",
      image: "",
    });
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:4000/events", {
          name: String(inputs.name),
          place: String(inputs.place),
          date: String(inputs.date),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history("/events"));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          minWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="name"
          />
          <FormLabel>Place</FormLabel>
          <TextField
            value={inputs.place}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="place"
          />
          <FormLabel>Date</FormLabel>
          <TextField
            value={inputs.date}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="date"
          />
          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="description"
          />
          <FormLabel>Price</FormLabel>
          <TextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="filled"
            name="price"
          />
          <FormLabel>Image</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="image"
          />
          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddEvent;