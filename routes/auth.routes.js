const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/sign-up", authController.signup);
router.delete("/remove-user", authController.deleteUser);
router.patch("/update-user", authController.updateUser);
router.get("/get-user", authController.getUser);

module.exports = router;
