const express = require("express");
const request = require("request");
const querystring = require("querystring");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

// allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  );
  next();
});

//Routes
app.get("/", (req, res) => {
  res.redirect("/api/rates");
});
app.get("/api/rates", (req, res) => {
  // get querystrings from app url
  const qs1 = req.query.base;
  const qs2 = req.query.currency;
  // create querystring to be sent to API url
  const queryParams = querystring.stringify({
    base: qs1,
    symbols: qs2,
  });

  const options = {
    url: "https://api.exchangeratesapi.io/latest?" + queryParams,
    method: "GET",
  };
  request(options, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      if (response.statusCode === 200) {
        const Obody = JSON.parse(body);
        const data = {
          results: {
            base: Obody.base,
            date: Obody.date,
            rates: Obody.rates,
          },
        };
        res.json(data);
      } else {
        const Obody = JSON.parse(body);
        res.status(400).json({ msg: Obody.error });
      }
    }
  });
});

//Routes
app.listen(PORT);
console.log(`server is running on ${PORT}`);
module.exports = app;
