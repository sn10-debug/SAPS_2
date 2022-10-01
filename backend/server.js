const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({
  path: "./config.env",
});
const mongoose = require("mongoose");

let database_string = process.env.DATABASE;

console.log(database_string);

database_string = database_string
  .replace("<USERNAME>", process.env.DATABASE_USERNAME)
  .replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(database_string, {
    // .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((connection) => {
    console.log(
      `${process.env.DATABASE_USERNAME} successfully connected to the database`
    );
  });

const port = process.env.PORT;

app.listen(port, "127.0.0.1", () => {
  console.log(`[ Server listening  on ${port} ]`);

  console.log(
    `[ $Date : ${new Intl.DateTimeFormat("en-GB").format(new Date())} ]`
  );
});
