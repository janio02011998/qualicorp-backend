import * as Restify from "restify";
import { includeRoutePrefix } from "./includeRoutePrefix";
import ScheduleRoutes from "~/endpoints/Schedule";
import TasksRoutes from "~/endpoints/Tasks";

const server = Restify.createServer();

export const routes = [
  ...includeRoutePrefix(ScheduleRoutes),
  ...includeRoutePrefix(TasksRoutes),
];

for (const route of routes) {
  const { path, action, method, middlewares = [], auth } = route;

  // if (auth === 'basic') {
  //   middlewares.unshift(basicAuth);
  // }

  const methodLowerCase = method.toLowerCase() as
    | "all"
    | "get"
    | "post"
    | "put"
    | "delete"
    | "patch"
    | "options"
    | "head";

  server[methodLowerCase](path, ...middlewares, action);
}

server.get("*", (req, res, next) =>
  next({
    status: 404,
    message: "RESOURCE_NOT_FOUND",
  })
);

export default server;
