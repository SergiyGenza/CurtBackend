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

// mintadsMSPush
// feed-1
app.get("/api/mintads/company/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.mintadsMSPush_CompanyFeed_1 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    // (uri =
    //   data.mintadsMSPush_CompanyFeed_1 +
    //   "&date_from=" +
    //   req.params.start +
    //   "&date_to=" +
    //   req.params.end),
    // console.log(uri),
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

app.get("/api/mintads/our/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.mintadsMSPush_OurFeed_1 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// feed-2
app.get("/api/mintads/company/feed-2/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.mintadsMSPush_CompanyFeed_2 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/mintads/our/feed-2/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.mintadsMSPush_OurFeed_2 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// daopush feed 1
app.get("/api/daopush/company/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.daopush_Company_Feed_1 +
        "&startDate=" +
        req.params.start +
        "&endDate=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/daopush/our/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.daopush_Our_Feed_1 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// daopush feed 2
app.get("/api/daopush/company/feed-2/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.daopush_Company_Feed_2 +
        "&startDate=" +
        req.params.start +
        "&endDate=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/daopush/our/feed-2/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.daopush_Our_Feed_2 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// daopush feed 3
app.get("/api/daopush/company/feed-3/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.daopush_Company_Feed_3 +
        "&startDate=" +
        req.params.start +
        "&endDate=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/daopush/our/feed-3/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.daopush_Our_Feed_3 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// myBid feed 1
app.get("/api/mybid/company/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Company_Feed_1 +
        "&startDate=" +
        req.params.start +
        "&endDate=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/mybid/our/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Our_Feed_1 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// myBid feed 2;
app.get("/api/mybid/company/feed-2/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Company_Feed_2 +
        "&startDate=" +
        req.params.start +
        "&endDate=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/mybid/our/feed-2/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Our_Feed_2 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// myBid feed 3;
app.get("/api/mybid/company/feed-3/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Company_Feed_3 +
        "&startDate=" +
        req.params.start +
        "&endDate=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/mybid/our/feed-3/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Our_Feed_3 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// myBid feed 3;
app.get("/api/mybid/company/feed-4/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Company_Feed_4 +
        "&startDate=" +
        req.params.start +
        "&endDate=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/mybid/our/feed-4/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.myBid_Our_Feed_4 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
// trending.bid;
app.get("/api/trendingbid/company/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.trendingBid_Company_Feed_1 +
        "&date_start=" +
        req.params.start +
        "&date_stop=" +
        req.params.end,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});
app.get("/api/trendingbid/our/feed-1/:start/:end", function (req, res) {
  request(
    {
      method: "GET",
      uri:
        data.trendingBid_Our_Feed_1 +
        "&date_from=" +
        req.params.start +
        "&date_to=" +
        req.params.end,
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
