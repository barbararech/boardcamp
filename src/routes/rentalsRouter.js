// import {
//   getRentals,
//   addRental,
//   finishRental,
//   deleteRental,
// } from "../controllers/rentalsController.js";
import {
  getRentals,
  addRental,
  deleteRental
} from "../controllers/rentalsController.js";
import { ValidateDeleteRental, ValidateRental } from "../middlewares/rentalsValidationMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/rentals", getRentals);
router.post("/rentals", ValidateRental, addRental);
// router.post("/rentals/:id/return", ValidateRental, finishRental);
router.delete("/rentals/:id", ValidateDeleteRental,deleteRental);

export default router;
