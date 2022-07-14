import { Button, Grid} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Accessory.css";
const Accessory = (props) => {
  const history = useNavigate();

  const { _id, name, brand, description, image, price} = props.accessory;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:4000/accessories/${_id}`)
      .then((res) => res.data)
      .then(() => history("/accessories"))
      history(0);


  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>{brand}</article>
      <h4>{name}</h4>
      <p>{description}</p>
      <h4>€ { price}</h4>
     <Grid container direction="column" justifyContent="center" alignItems="center" >
      <Button style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}} LinkComponent={Link} to={`/accessories/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}} color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button></Grid>
    </div>
  );
};

export default Accessory;