import { Request, Response } from "express";

async function findAll(req: Request, res: Response) {
  try {
    const tasks = [
      { id: 1660950150918, title: "Ir ao mercado", completed: false },
      { id: 1660950150919, title: "Fazer lanche", completed: false },
      { id: 1660950150920, title: "Malhar", completed: false },
      { id: 1660950150921, title: "Buscar filha", completed: false },
      { id: 1660950150922, title: "Ir ao jogo", completed: false },
    ];

    return res.send(tasks);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Erro on find all tasks");
  }
}

export default {
  action: findAll,
};
