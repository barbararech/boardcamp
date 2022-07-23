import connection from "../dbStartegy/postgres.js";
import dayjs from "dayjs";

// export async function getGames(req, res) {
//   const { name } = req.query;
//   let findByName = "";

//   try {
//     if (name) {
//       findByName = `WHERE games.name ILIKE '${name}%'`;
//     }

//     const { rows: games } = await connection.query(
//       `SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON games."categoryId" = categories.id ${findByName};`
//     );

//     return res.send(games);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// }

export async function addRental(req, res) {
  try {
    const { customerId, gameId, daysRented } = req.body;

    const returnDate = null;
    const delayFee = null;
    const rentDate = dayjs().format("YYYY-MM-DD");

    const { rows: games } = await connection.query(
      `SELECT * FROM games WHERE id = ${gameId};`
    );

    const originalPrice = daysRented * games[0].pricePerDay;

    await connection.query(
      `INSERT INTO rentals ("customerId", "gameId", "daysRented", "returnDate", "delayFee","rentDate", "originalPrice") VALUES ($1, $2, $3, $4, $5, $6, $7);`,
      [
        customerId,
        gameId,
        daysRented,
        returnDate,
        delayFee,
        rentDate,
        originalPrice,
      ]
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
