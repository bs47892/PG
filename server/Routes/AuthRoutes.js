const { register, login } = require("../Controllers/AuthControllers");
const { checkUser } = require("../Middlewares/AuthMiddlewares");

const router = require("express").Router();

router.post("/LogedIn", checkUser); 
router.post("/register", register);
router.post("/login", login);

module.exports = router;
