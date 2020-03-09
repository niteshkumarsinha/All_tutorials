const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./getForeCast");
const geoCode = require("./getGeoCode");
const chalk = require("chalk");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//template engine setups
app.set("view engine", "hbs");
//setting new views path
app.set("views", viewsPath);
//telling hbs about partials path
hbs.registerPartials(partialsPath);

//Customize server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home Page from HBS",
    name: "Nitesh Kumar"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    name: "Nitesh",
    age: 28
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    about: "About Page"
  });
});

app.get("/home", (req, res) => {
  res.render("index", {
    title: "Home Page from HBS",
    name: "Nitesh Kumar"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.location) {
    req.query.location = "Delhi";
  }

  // res.send({
  //   forecast: "warm temperature through the day",
  //   address: req.query.address
  // });

  geoCode(req.query.location, (error, data) => {
    if (error) return;
    forecast(data.longitude, data.latitude, (err, response) => {
      if (err) return;
      console.log("Getting Weather Data");
      console.log(chalk.green("-----------------------------"));
      const data = response.body.currently;
      const temperature = data.temperature;
      const chanceOfRain = data.precipProbability;
      const summary = response.body.daily.data[0].summary;
      const output = `${summary} It is currently ${temperature} degrees out. There is a ${chanceOfRain}% chance of rain`;
      console.log(chalk.blue.inverse.bold(output));

      res.render("weather", {
        location: req.query.location,
        temperature: data.temperature,
        chanceOfRain: data.precipProbability
      });
    });
  });
});



app.get("/fetchWeather", (req, res) => {
  
  if (!req.query.location) {
    req.query.location = "Delhi";
  }

  geoCode(req.query.location, (error, data) => {
    if (error) return;
    forecast(data.longitude, data.latitude, (err, response) => {
      if (err) return;
      console.log("Getting Weather Data");
      console.log(chalk.green("-----------------------------"));
      const data = response.body.currently;
      const temperature = data.temperature;
      const chanceOfRain = data.precipProbability;
      const summary = response.body.daily.data[0].summary;
      const output = `${summary} It is currently ${temperature} degrees out. There is a ${chanceOfRain}% chance of rain`;
      console.log(chalk.blue.inverse.bold(output));

      res.send({
        location: req.query.location,
        temperature: data.temperature,
        chanceOfRain: data.precipProbability
      });
    });
  });
});


app.get("/products", (req, res) => {
  console.log(req);

  if (!req.query.search) {
    return res.send({ error: "No search string provides" });
  }

  res.send({
    query: req.query
  });
});

app.get("/help*", (req, res) => {
  res.render("404", { title: "help article not found" });
});

//match anything that hasn't been matched so far
app.get("*", (req, res) => {
  res.render("404", {
    title: "page not found"
  });
});

app.listen(8000, () => {
  console.log("Server is listening on Port 8000");
});
