const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  console.log(`Listening on port 3000`);
})
app.listen(3000);