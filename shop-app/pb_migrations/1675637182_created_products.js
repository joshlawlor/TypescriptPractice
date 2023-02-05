migrate((db) => {
  const collection = new Collection({
    "id": "k078u2qdi5aznus",
    "created": "2023-02-05 22:46:22.785Z",
    "updated": "2023-02-05 22:46:22.785Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s0nywxda",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cwoq59s7",
        "name": "price",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k078u2qdi5aznus");

  return dao.deleteCollection(collection);
})
