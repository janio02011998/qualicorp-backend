import { Request, Response, Next } from "restify";
import { session } from "~/database";

async function findAll(req: Request, res: Response, next: Next) {
  try {
    const { completed } = req.body;

    const writeQuery = `MATCH (n:Tasks) RETURN n`;

    const writeResult = await session.writeTransaction((tx) =>
      tx.run(writeQuery, { completed })
    );

    const tasks = writeResult.records.map(
      (record) => record.get("n").properties
    );

    res.send(tasks);
  } catch (err) {
    res.status(400);
  } finally {
    return next();
  }
}

export default {
  action: findAll,
};
