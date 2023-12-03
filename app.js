const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const output = addDays(
    new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()),
    100
  );
  const formatedDate = `${output.getDate()}/${output.getMonth()}/${output.getFullYear()}`;
  response.send(formatedDate);
});

app.listen(3000);
module.exports = app;
