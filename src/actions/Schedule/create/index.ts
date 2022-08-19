import { Request, Response } from "express";

async function create(req: Request, res: Response) {
  try {
    return res.status(201).send("teste 3");
  } catch (err) {
    return res.send("Erro on create new schedule");
  }
}

export default {
  action: create,
};
