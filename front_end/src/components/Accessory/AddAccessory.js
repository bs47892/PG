import {
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddAccessory = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      brand: "",
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
        .post("http://localhost:4000/accessories", {
          name: String(inputs.name),
          brand: String(inputs.brand),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history("/accessories"));
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
          <FormLabel>Brand</FormLabel>
          <TextField
            value={inputs.brand}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="brand"
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
            Add Accessory
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddAccessory;