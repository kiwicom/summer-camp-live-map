```
yarn nodemon index.js
```

Example query:

```graphql
{
  flights(first: 2) {
    id
    location {
      latitude
      longitude
    }
    orientation
  }
  error # example
  stats {
    activePAX: activePassengers
    activeFlights
    topNationalities {
      code
      passengers
    }
  }
}
```

Expected response:

```json
{
  "data": {
    "flights": [
      {
        "id": "bcd51b1a-be52-58e8-30c6-8a25a767f718",
        "location": {
          "latitude": -76.2006745324889,
          "longitude": 36.8954499235707
        },
        "orientation": 210.954108963133
      },
      {
        "id": "ad8ff1e2-8839-394f-22db-ed04b278f13d",
        "location": {
          "latitude": 115.091697809339,
          "longitude": -8.72478534528515
        },
        "orientation": 107.124932502817
      }
    ],
    "error": null,
    "stats": {
      "activePAX": 14624,
      "activeFlights": 1593,
      "topNationalities": [
        {
          "code": "US",
          "passengers": 2114
        },
        {
          "code": "GB",
          "passengers": 1089
        },
        {
          "code": "FR",
          "passengers": 683
        }
      ]
    }
  },
  "errors": [
    {
      "message": "Int cannot represent non 32-bit signed integer value: error example",
      "locations": [
        {
          "line": 10,
          "column": 3
        }
      ],
      "path": [
        "error"
      ]
    }
  ]
}
```