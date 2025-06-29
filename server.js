const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const sequelize = require("./config/db");

const authRoute = require("./routes/auth.routes");
const commentRoute = require("./routes/comment.routes");
const postRoute = require("./routes/post.routes");

async function getUsers() {
  try {
    const [users] = await sequelize.query("SELECT * FROM users");
    console.log(users); // this is the array of user objects
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

getUsers();

// ✅ Parse JSON request bodies
app.use(express.json());

// ✅ (Optional) Parse form-encoded bodies (e.g., from HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// ✅ Mount routes
app.use(authRoute);
app.use(commentRoute);
app.use(postRoute);

app.use(bodyParser.urlencoded({ extended: false })); // For Form Submission and can parse them to make them readable

app.listen(3002);
