module.exports = {
  routes: [{
    method: "GET",
    path: "/category/:slug",
    handler: "category.findOne",
    config: {
      auth: false
    }
  }, ],
};
