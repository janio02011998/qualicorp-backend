import { Request, Response, Next } from "restify";

async function findAll(req: Request, res: Response, next: Next) {
  try {
    res.send({ schedule: [] });
  } catch (err) {
    res.status(400);
  } finally {
    return next();
  }
}

export default {
  action: findAll,
};
