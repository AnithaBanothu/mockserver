const express = require('express');
const app = express();

app.use(express.json());

const hits = {};
app.post('/players/:_id', (req, res) => {
  const id = req.params._id;
  console.log(`Request received for player with id: ${id}`)
  
  if (id < 4) {
    return res.status(200).json({ level: id });
  }

  hits[id] = hits[id] ? hits[id] + 1 : 1;
  if ((hits[id] / 4) > (id - 3)) {
    return res.status(200).json({ level: id });
  }

  res.status(429).json({ level: id, classification: "rate_limit" })
});

app.post('/players1/:_id', (req, res) => {
  const id = req.params._id;
  console.log(`Request received for player with id: ${id}`)
  
  if (id < 4) {
    return res.status(200).json({ level: id });
  }

  hits[id] = hits[id] ? hits[id] + 1 : 1;
  if ((hits[id] / 4) > (id - 3)) {
    return res.status(200).json({ level: id });
  }

  res.status(429).json({ level: id, classification: "rate_limit" })
});

const paginationHits = {};
app.get('/players', (req, res) => {
  const page = req.query.page;
  console.log(`Request received for players with page: ${page}`)
  
  const pageNumber = Number(page) + 1
  if (page < 2) {
    return res.status(200).json([{
      _id: pageNumber,
      name: `Player ${pageNumber}`,
      level: pageNumber,
    }])
  } else if (page > 30) {
    return res.status(404).json({ message: "Page not found" })
  }

  paginationHits[pageNumber] = paginationHits[pageNumber] ? paginationHits[pageNumber] + 1 : 1;
  if (Math.floor((paginationHits[pageNumber] / 4)) > (pageNumber - 3)) {
    return res.status(200).json([{
      _id: pageNumber,
      name: `Player ${pageNumber}`,
      level: pageNumber,
    }]);
  }

  res.status(429).json({
    page: pageNumber,
    classification: "rate_limit"
  });
})

app.get('/players-array', (req, res) => {
  return res.status(200).json([
    [ {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    }
  ]])
})

app.get('/players-long', (req, res) => {
  return res.status(200).json([
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 2
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 3
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    },
    {
      "_id": 1,
      "name": "Player 1",
      "level": 1
    }
  ])
})

app.get('/oneToManyData/:numData', (req, res) => {
  const { numData } = req.params
  const data = []
  for (let i = 0; i < numData; ++i) {
    data.push({
      id: i,
      name: `data${i}`,
    })
  }
  res.status(200).json({data})
})

const port = process.env.PORT || 1234;
app.listen(port, () => console.log(`Server running on port ${port}`));