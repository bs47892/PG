import { Button, Grid} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Author.css";
const Author = (props) => {
  const history = useNavigate();

  const { _id, name, life, description, category, image} = props.author;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:4000/authors/${_id}`)
      .then((res) => res.data)
      .then(() => history("/authors"))
      history(0);


  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>{life}</article>
      <h4>{name}</h4>
      <p>{description}</p>
      <h4>{category}</h4>
     <Grid container direction="column" justifyContent="center" alignItems="center" >
      <Button style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}} LinkComponent={Link} to={`/authors/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}} color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button></Grid>
    </div>
  );
};

export default Author;