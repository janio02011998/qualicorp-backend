import * as Restify from "restify";
import cors from "cors";
import server from "./routes";
import "dotenv/config";

server.use(Restify.plugins.acceptParser(server.acceptable));
server.use(Restify.plugins.queryParser());
server.use(Restify.plugins.bodyParser());
server.use(cors());

server.listen(8080, function () {
  console.log("%s listening at %s", server.name, server.url);
});
