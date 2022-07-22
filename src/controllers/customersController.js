import connection from "../dbStartegy/postgres.js";

export async function getCustomers(req, res) {
  const { cpf } = req.query;

  try {
    if (cpf) {
      const { rows: customers } = await connection.query(
        `SELECT * FROM customers WHERE games.name ILIKE '${cpf}%';`
      );
      return res.send(customers);
    } else {
      const { rows: customers } = await connection.query(
        `SELECT * FROM customers;`
      );
      return res.send(customers);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

