import * as Tasks from "~/actions/Tasks";

const prefixRoute = "/tasks";

const routes = [
  {
    method: "POST",
    path: "/",
    description: "create new task",
    ...Tasks.create,
  },
  {
    method: "GET",
    path: "/",
    description: "get all tasks",
    ...Tasks.findAll,
  },
  {
    method: "DEL",
    path: "/:id",
    description: "remove task",
    ...Tasks.remove,
  },
  {
    method: "PATCH",
    path: "/:id",
    description: "update task",
    ...Tasks.update,
  },
];

export default {
  prefixRoute,
  routes,
};
