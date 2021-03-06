const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const app =express();
const cookieParser=require("cookie-parser");
const router = require("./Routes/book-routes");
const alrouter = require ("./Routes/AlBook-routes");
const ltrouter =require ("./Routes/LtBook-routes");
const frouter = require ("./Routes/FBook-routes");
const authorRouter = require("./Routes/Author-routes")
const accessoryRouter = require("./Routes/Accessory-routes")
const eventRouter = require("./Routes/Event-routes")

//Middlewares
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        method: ["GET","POST","CREATE","UPDATE","DELETE"],
        credentials: true,
    })
);
app.use("/books", router)
app.use("/booksinalbanian", alrouter)
app.use ("/languagetextbooks", ltrouter)
app.use ("/foreignbooks", frouter)
app.use("/authors", authorRouter)
app.use("/accessories", accessoryRouter)
app.use("/events", eventRouter)

app.listen (4000, ()=>{
    console.log("Server Started on PORT 4000");
});

mongoose
.connect("mongodb://localhost:27017/ProjektiGrupor",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Database is connected successfully");
})
.catch ((err)=> {
    console.log(err.message);
});




app.use (cookieParser());
app.use(express.json());
app.use("/", authRoutes);
