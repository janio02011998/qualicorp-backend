import { Request, Response, Next } from "restify";

import { session } from "~/database";

async function remove(req: Request, res: Response, next: Next) {
  try {
    const data = req.params;

    const id = parseInt(data.id);

    const writeQuery = `MATCH (n:Tasks { id: $id }) DELETE n`;

    await session.writeTransaction((tx) => tx.run(writeQuery, { id }));

    res.send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400);
  } finally {
    return next();
  }
}

export default {
  action: remove,
};
