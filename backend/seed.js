import dotenv from "dotenv";
import mongoose from "mongoose";
import Dish from "./models/Dish.js";
import fs from "fs";

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    
    const rawData = fs.readFileSync("./seed-data.json", "utf-8");
    const seedData = JSON.parse(rawData);

    
    await Dish.deleteMany({});
    await Dish.insertMany(seedData);

    console.log("Database seeded successfully");
    process.exit(0);

  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
