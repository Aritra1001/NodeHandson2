const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      message:
        "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    })
  );
});

app.get("/about", (req, res) => {
  res.send("THis is about page");
});

app.listen(3055, () => {
  console.log("Server is running");
});
