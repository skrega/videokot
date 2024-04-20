module.exports = {
  routes: [{
    method: "GET",
    path: "/instructions/:slug",
    handler: "instruction.findOne",
    config: {
      auth: false
    }
  }, ],
};
