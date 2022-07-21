import connection from "../dbStartegy/postgres.js";

export async function getCategories(req, res) {
  try {
    const { rows: categories } = await connection.query(
      "SELECT * FROM categories"
    );
    res.send(categories);
  } catch {
    res.sendSattus(500);
  }
}
