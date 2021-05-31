const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(router);

app.listen(1010, () => console.log("i am listening"));
