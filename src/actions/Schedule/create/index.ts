import { Request, Response, Next } from "restify";
import { driver } from "~/database";

async function create(req: Request, res: Response, next: Next) {
  const session = driver.session({ database: "neo4j" });
  try {
    const date = new Date();

    //   const writeQuery = `UNWIND [
    //     { title: "Cypher Basics I",
    //       created: datetime("2019-06-01T18:40:32.142+0100"),
    //       datePublished: date("2019-06-01"),
    //       readingTime: {minutes: 2, seconds: 15} },
    //     { title: "Cypher Basics II",
    //       created: datetime("2019-06-02T10:23:32.122+0100"),
    //       datePublished: date("2019-06-02"),
    //       readingTime: {minutes: 2, seconds: 30} },
    //     { title: "Dates, Datetimes, and Durations in Neo4j",
    //       created: datetime(),
    //       datePublished: date(),
    //       readingTime: {minutes: 3, seconds: 30} }
    // ] AS articleProperties

    // CREATE (article:Article {title: articleProperties.title})
    // SET article.created = articleProperties.created,
    //     article.datePublished = articleProperties.datePublished,
    //     article.readingTime = duration(articleProperties.readingTime)`;

    const writeQuery = `MATCH (n)
    DETACH DELETE n`;

    const writeResult = await session.writeTransaction((tx) =>
      tx.run(writeQuery)
    );

    // const person1Name = "Alice";
    // const person2Name = "David";

    // const writeQuery = `MERGE (p1:Person { name: $person1Name })
    //                    MERGE (p2:Person { name: $person2Name })
    //                    MERGE (p1)-[:KNOWS]->(p2)
    //                    RETURN p1, p2`;

    // const writeResult = await session.writeTransaction((tx) =>
    //   tx.run(writeQuery, { person1Name, person2Name })
    // );
    // writeResult.records.forEach((record) => {
    //   const person1Node = record.get("p1");
    //   const person2Node = record.get("p2");
    //   console.log(
    //     `Created friendship between: ${person1Node.properties.name}, ${person2Node.properties.name}`
    //   );
    // });

    res.send("teste 3");
  } catch (err) {
    console.log(err);
    res.status(500);
  } finally {
    await session.close();
    await driver.close();
    return next();
  }
}

export default {
  action: create,
};
