module.exports = {
    routes: [{
      method: "GET",
      path: "/complect/:slug",
      handler: "complect.findOne",
      config: {
        auth: false
      }
    }, ],
  };
  