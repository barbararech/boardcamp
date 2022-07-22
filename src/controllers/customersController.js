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

export async function getCustomer(req, res) {
    const { id } = req.params;
  
    try {
      const { rows: customer } = await connection.query(
        `SELECT * FROM customers WHERE id = ${id};`
      );
  
      if (customer.length === 0) {
        return res.sendStatus(404);
      }
  
      return res.send(customer);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
  
  
  