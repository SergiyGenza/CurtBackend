const express = require("express");
// const cors = require("cors");
const app = express();
const request = require("request");
// const axios = require("axios");

let data = require("./varialbles");

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: "POST,GET,PUT,OPTIONS,DELETE",
//     optionSuccessStatus: 200,
//   })
// );

app.use(express.static("frontend"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("1", async (req, res) => {
  let data = [];
  data.companies.map((c) => {
    request(
      {
        method: "GET",
        uri: c,
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          // res.json(body);
          data.push(body);
        }
      }
    );
  });
  return data;
});

// mintadsMSPush
// feed-1
app.get("/api/mintads/company/feed-1", function (req, res) {
  request(
    {
      method: "GET",
      uri: data.mintadsMSPush_CompanyFeed_1,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

app.get("/api/mintads/our/feed-1", function (req, res) {
  request(
    {
      method: "GET",
      uri: data.mintadsMSPush_OurFeed_1,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// feed-2
app.get("/api/mintads/company/feed-2", function (req, res) {
  request(
    {
      method: "GET",
      uri: data.mintadsMSPush_CompanyFeed_2,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

app.get("/api/mintads/our/feed-2", function (req, res) {
  request(
    {
      method: "GET",
      uri: data.mintadsMSPush_OurFeed_2,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

// daopush
app.get("/api/daopush/company/feed-1", function (req, res) {
  request(
    {
      method: "GET",
      uri: data.daopush_Company_Feed_1,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

app.get("/api/daopush/our/feed-1", function (req, res) {
  request(
    {
      method: "GET",
      uri: data.daopush_Our_Feed_1,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("node server is running on http://localhost:3000");
});
