import joi from "joi";

export const customerSchema = joi.object({
  name: joi.string().required(),
  cpf: joi
    .string()
    .regex(/[0-9]{11}/)
    .required(),
  phone: joi
    .string()
    .regex(/[0-9]{10,11}/)
    .required(),
  birthday: joi.date().iso().required(),
});
