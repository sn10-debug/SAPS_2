const express = require("express");
const fallback = require("express-history-api-fallback");
const morgan = require("morgan");
const cors = require("cors");
const doctorDetailsRouter = require("./routers/userDetailsRouter");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(express.static(`${__dirname}/../scripts`));

// This is a middleware used for serving static files

app.use((request, _, next) => {
  // request.body.DateTime=new Intl.DateTimeFormat('en-GB').format(new Date())

  request.body.DateTime = new Date().toISOString();
  request.body.Organization = "Sigma";
  next();
});

app.use("/api/v1/user/", doctorDetailsRouter);

app.use(fallback("index.html", { root: `${__dirname}/../scripts` }));

module.exports = app;
