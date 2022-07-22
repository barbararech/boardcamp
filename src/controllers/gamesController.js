import connection from "../dbStartegy/postgres.js";

export async function getGames(req, res) {
  const { name } = req.query;

  try {
    if (name) {
      const { rows: games } = await connection.query(
        `SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON games."categoryId" = categories.id WHERE games.name ~ '^/${name}/'`
      );
      return res.send(games);
    } else {
      const { rows: games } = await connection.query(
        `SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON games."categoryId" = categories.id`
      );
      return res.send(games);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function addGame(req, res) {
  
}
