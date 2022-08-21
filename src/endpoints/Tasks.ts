import * as Tasks from "~/actions/Tasks";

const prefixRoute = "/tasks";

const routes = [
  {
    method: "POST",
    auth: "basic",
    path: "/",
    description: "create new task",
    ...Tasks.create,
  },
  {
    method: "GET",
    auth: "basic",
    path: "/",
    description: "get all tasks",
    ...Tasks.findAll,
  },
  {
    method: "DEL",
    auth: "basic",
    path: "/:id",
    description: "remove task",
    ...Tasks.remove,
  },
];

export default {
  prefixRoute,
  routes,
};
