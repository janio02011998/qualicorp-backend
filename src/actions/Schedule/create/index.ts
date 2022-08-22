import { Request, Response, Next } from "restify";
import { session } from "~/database";

async function create(req: Request, res: Response, next: Next) {
  try {
    res.send("Criado com sucesso!");
  } catch (err) {
    res.status(500);
  } finally {
    await session.close();
    return next();
  }
}

export default {
  action: create,
};
