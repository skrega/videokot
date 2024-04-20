module.exports = {
  routes: [{
    method: "GET",
    path: "/videomaterial/:slug",
    handler: "videomaterial.findOne",
    config: {
      auth: false
    }
  }, ],
};
