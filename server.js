const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.get("/home", (req, res) => {
    app.render(req, res, "/");
  });

  server.get("/aboutus", (req, res) => {
    app.render(req, res, "/Aboutus");
  });
  server.get("/features", (req, res) => {
    app.render(req, res, "/Features");
  });
  server.get("/pricing", (req, res) => {
    app.render(req, res, "/Pricing");
  });
  server.get("/work", (req, res) => {
    app.render(req, res, "/Work");
  });
  server.get("/readcasestudy", (req, res) => {
    app.render(req, res, "/Readcasestudy");
  });
  server.get("/features", (req, res) => {
    app.render(req, res, "/Features");
  });
  server.get("/readblog", (req, res) => {
    app.render(req, res, "/Readblog");
  });
  server.all("*", (req, res) => {
    return handle(req, res, "/");
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
