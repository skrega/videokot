module.exports = {
    routes: [{
      method: "GET",
      path: "/new/:slug",
      handler: "new.findOne",
      config: {
        auth: false
      }
    }, ],
  };
  