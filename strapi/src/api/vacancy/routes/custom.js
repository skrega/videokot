module.exports = {
  routes: [{
    method: "GET",
    path: "/vacancies/:slug",
    handler: "vacancy.findOne",
    config: {
      auth: false
    }
  }, ],
};
