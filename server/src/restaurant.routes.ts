import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";
 
export const restaurantRouter = express.Router();
restaurantRouter.use(express.json());
 
restaurantRouter.get("/", async (_req, res) => {
   try {
       const restaurants = await collections.restaurants.find().limit(20).toArray();
       res.status(200).send(restaurants);
   } catch (error) {
       res.status(500).send(error.message);
   }
});

restaurantRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const restaurant = await collections.restaurants.findOne(query);
  
        if (restaurant) {
            res.status(200).send(restaurant);
        } else {
            res.status(404).send(`Failed to find a restaurant: ID ${id}`);
        }
  
    } catch (error) {
        res.status(404).send(`Failed to find a restaurant: ID ${req?.params?.id}`);
    }
 });

 
 