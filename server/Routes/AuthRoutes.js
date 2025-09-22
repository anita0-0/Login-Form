const { signup, login } = require("../Controllers/AuthControllers");
const {checkUser} = require("..//Middlewares/authMiddlewares");
const router = require("express").Router();

router.post("/",checkUser);
// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

module.exports = router;
