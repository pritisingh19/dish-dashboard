import express from "express";
import Dish from "../models/Dish.js";

export default function (io) {
  const router = express.Router();

 
  router.get("/", async (req, res) => {
      const dishes = await Dish.find({});
       res.json(dishes);
  });

  
  router.patch("/:dishId/toggle", async (req, res) => {
    const { dishId } = req.params;

    const dish = await Dish.findOne({ dishId });
    if (!dish) {
      return res.status(404).json({ message: "not found" });
    }

    dish.isPublished = !dish.isPublished;
    await dish.save();

    
    io.emit("dishUpdated", {
      dishId: dish.dishId,
      isPublished: dish.isPublished
    });

    res.json(dish);
  });

  return router;
}
