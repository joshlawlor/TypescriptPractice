migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k078u2qdi5aznus")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k078u2qdi5aznus")

  collection.listRule = null

  return dao.saveCollection(collection)
})
