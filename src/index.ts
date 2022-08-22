import "dotenv/config";

import * as Restify from "restify";
import corsMiddleware from "restify-cors-middleware";

import server from "./routes";

var cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ["*"],
  allowHeaders: ["X-App-Version"],
  exposeHeaders: [],
});

server.use(Restify.plugins.acceptParser(server.acceptable));
server.use(Restify.plugins.queryParser());
server.use(Restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

server.listen(3333, function () {
  console.log("%s listening at %s", server.name, server.url);
});
