import {
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddAuthor = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      life: "",
      description: "",
      category: "",
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
        .post("http://localhost:4000/authors", {
          name: String(inputs.name),
          life: String(inputs.life),
          description: String(inputs.description),
          category: String(inputs.category),
          image: String(inputs.image),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history("/authors"));
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
          <FormLabel>Life</FormLabel>
          <TextField
            value={inputs.life}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="life"
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
          <FormLabel>Category</FormLabel>
          <TextField
            value={inputs.category}
            onChange={handleChange}
            type="normal"
            margin="normal"
            fullWidth
            variant="filled"
            name="category"
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
            Add Author
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddAuthor;