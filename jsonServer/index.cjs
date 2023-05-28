(() => {
  const jsonServer = require("json-server");
  const server = jsonServer.create();
  const router = jsonServer.router("./jsonServer/db.json");
  const middlewares = jsonServer.defaults();

  middlewares.push((req, res, next) => {
    req.page = req.query._page = req.query?.page;
    req.limit = req.query._limit = req.query?.limit;
    next();
  });

  // Apply middlewares
  server.use(middlewares);
  server.use(router);

  router.render = (req, res) => {
    const data = res.locals.data;
    const routes = ["posts", "users"];
    const reqRoute = req.url.split("/")[1].split("?")[0];

    const matched = routes.find((r) => r === reqRoute);
    const respObj = {
      page: req.page,
      ...(Array.isArray(data) && { totalCount: 100 }),
      message: `${
        matched ? matched[0].toUpperCase() + matched.slice(1).toLowerCase() : ""
      } Retrieved Successfully`,
      data,
      status: 200,
    };
    res.jsonp(respObj);
  };

  // Start the server
  const port = 5001;
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
})();
