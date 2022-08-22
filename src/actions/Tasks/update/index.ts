import { Request, Response, Next } from "restify";

import { session } from "~/database";

async function update(req: Request, res: Response, next: Next) {
  try {
    const data = req.params;
    const { title, completed } = req.body;

    const id = parseInt(data.id);

    const writeQuery = `MATCH (n:Tasks { id: $id })
                        SET n.title = $title
                        SET n.completed = $completed 
                        SET n.id = $id 
                        RETURN n`;

    await session.writeTransaction((tx) =>
      tx.run(writeQuery, { id, title, completed })
    );

    res.send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400);
  } finally {
    return next();
  }
}

export default {
  action: update,
};
