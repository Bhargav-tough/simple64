const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017")
  .then(client => {
    console.log("Connected!");

    const col = client.db("mydatabase").collection("mycollection");

    return col.updateOne(
      { name: "Alice" },
      { $set: { age: 30 } }
    ).finally(() => client.close());
  })
  .then(res => console.log("Updated:", res.modifiedCount))
  .catch(err => console.error("Error:", err));
