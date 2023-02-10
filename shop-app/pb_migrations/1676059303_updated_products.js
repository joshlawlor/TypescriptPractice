migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k078u2qdi5aznus")

  // remove
  collection.schema.removeField("cwoq59s7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mgjjesjq",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k078u2qdi5aznus")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("mgjjesjq")

  return dao.saveCollection(collection)
})
