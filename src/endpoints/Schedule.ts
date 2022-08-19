import * as Schedule from "~/actions/Schedule";

const prefixRoute = "/schedule";

const routes = [
  {
    method: "POST",
    auth: "basic",
    path: "/",
    description: "create schedule",
    ...Schedule.create,
  },
  {
    method: "GET",
    auth: "basic",
    path: "/",
    description: "get all schedule by user",
    ...Schedule.findAll,
  },
];

export default {
  prefixRoute,
  routes,
};
