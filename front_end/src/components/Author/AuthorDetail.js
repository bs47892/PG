import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const AuthorDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:4000/authors/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.author));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:4000/authors/${id}`, {
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
      sendRequest().then(() => history("/authors"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
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
              Update Author
            </Button>
          </Box>
        </form>
        )}
      </div>
    );
  };
  
  export default AuthorDetail;