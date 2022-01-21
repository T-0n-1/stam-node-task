const express = require("express");
const app = express();
const port = 3000;

/**
 *
 * @param {number} a First param
 * @param {number} b Second param
 * @returns {number} Sum of a and b
 */
const add = (a, b) => {
  return a + b;
};

app.get("/", (req, res) => {
  const sum = add(1, 2);
  console.log(sum);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
