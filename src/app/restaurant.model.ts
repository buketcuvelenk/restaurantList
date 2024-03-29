export interface Restaurant {
    "id": "string",
    "title": "string",
    "text": "string",
    "type": "string",
    "images": [
      {
        "itemType": "string",
        "itemId": "string",
        "imageSize": "string",
        "base64": "string",
        "storeId": "string"
      }
    ],
    "location": {
      "type": "string",
      "coordinates": [
        0
      ]
    },
    "isDinner": true,
    "isDelivery": true,
    "storeInfo": {
      "id": "string",
      "geoLocation": {
        "approve": true,
        "latitude": 0,
        "longitude": 0
      },
      "userPoint": 0,
      "workingHours": [
        {
          "day": 0,
          "open": "string",
          "close": "string",
          "closed": true
        }
      ],
      "status": "string",
      "rate": 0,
      "minOrderPrice": 0
    },
    "categoryId": "string"
  

}
