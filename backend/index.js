const express = require("express");

const app = express();

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `Express listening at http://localhost:${process.env.EXPRESS_PORT}`
  )
);
