import { Request, Response } from "express";
// import { driver } from "~/database";

async function findAll(req: Request, res: Response) {
  try {
    // const session = driver.session();

    // session
    //   .run("MATCH (c:Category) RETURN c.name as category")
    //   .then((result: any) => {
    //     console.log(result);
    //   });

    return res.send("ola janio 10");
  } catch (err) {
    console.log(err);
    return res.send("Erro on create new city");
  }
}

export default {
  action: findAll,
};
