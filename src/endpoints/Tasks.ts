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
];

export default {
  prefixRoute,
  routes,
};
