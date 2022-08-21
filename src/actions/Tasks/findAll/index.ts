import { Request, Response, Next } from "restify";
import { driver } from "~/database";

async function findAll(req: Request, res: Response, next: Next) {
  const session = driver.session({ database: "neo4j" });
  try {
    const writeQuery = `MATCH (n:Tasks) RETURN n`;

    const writeResult = await session.writeTransaction((tx) =>
      tx.run(writeQuery)
    );

    const tasks = writeResult.records.map(
      (record) => record.get("n").properties
    );

    res.send(tasks);
  } catch (err) {
    res.status(400);
  } finally {
    await session.close();
    await driver.close();
    return next();
  }
}

export default {
  action: findAll,
};
