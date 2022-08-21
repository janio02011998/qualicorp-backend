import { Request, Response, Next } from "restify";
import { driver } from "~/database";
import { ITask } from "~/interfaces/Model/Tasks";

async function create(req: Request, res: Response, next: Next) {
  const session = driver.session({ database: "neo4j" });
  try {
    const { id, title, completed }: ITask = req.body;

    const writeQuery = `CREATE (t1:Tasks {
      id: $id, title: $title, completed: $completed })
                        return t1`;

    const writeResult = await session.writeTransaction((tx) =>
      tx.run(writeQuery, { id, title, completed })
    );

    writeResult.records.forEach((record) => {
      const task1 = record.get("t1");

      console.log("Create new task", task1);
    });

    res.send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send("Erro on create new tasks");
  } finally {
    await session.close();
    await driver.close();
    return next();
  }
}

export default {
  action: create,
};
