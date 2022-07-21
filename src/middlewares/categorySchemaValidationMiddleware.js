import { categorySchema } from "../schemas/categorySchema.js";

export async function ValidateCategory(req, res, next) {
  const validation = categorySchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    console.log(validation.error.details);
    return res.sendStatus(400);
  }

  next();
}
