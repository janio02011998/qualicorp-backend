import { Request, Response, Next } from "restify";

async function findAll(req: Request, res: Response, next: Next) {
  try {
    const tasks = [
      { id: 1660950150918, title: "Ir ao mercado", completed: false },
      { id: 1660950150919, title: "Fazer lanche", completed: false },
      { id: 1660950150920, title: "Malhar", completed: false },
      { id: 1660950150921, title: "Buscar filha", completed: false },
      { id: 1660950150922, title: "Ir ao jogo", completed: false },
    ];

    res.send(tasks);
  } catch (err) {
    console.log(err);
    res.status(400);
  } finally {
    return next();
  }
}

export default {
  action: findAll,
};
