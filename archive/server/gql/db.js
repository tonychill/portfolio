const { DataStore } = require("notarealdb");

const store = new DataStore("./data");

module.exports = {
  projects: store.collection("projects"),
  articles: store.collection("articles"),
  users: store.collection("users"),
};
