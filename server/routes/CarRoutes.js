import express from "express";
import {
  createCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
} from "../controllers/CarsController.js";

const carRouter = express.Router();
carRouter.post("/cars", createCar);
carRouter.get("/cars", getAllCars);
carRouter.get("/cars/:id", getCarById);
carRouter.put("/cars/:id", updateCarById);
carRouter.delete("/cars/:id", deleteCarById);

export default carRouter;
