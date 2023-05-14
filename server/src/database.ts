import * as mongodb from "mongodb";
import { restaurant } from "./restaurant";
 
export const collections: {
   restaurants?: mongodb.Collection<restaurant>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("sample_restaurants");
   await applySchemaValidation(db);
 
   const restaurantsCollection = db.collection<restaurant>("restaurants");
   collections.restaurants = restaurantsCollection;
}
 
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["name"],
           additionalProperties: false,
           properties: {
               _id: {},
               name: {
                   bsonType: "string",
                   description: "'name' is required and is a string",
               },
               borough: {
                   bsonType: "string",
                   description: "'borough' is required and is a string",
               },
               cuisine: {
                bsonType: "string",
                description: "'cuisine' is required and is a string",
                },
                restaurant_id: {
                    bsonType: "string",
                    description: "'Rest_id' is required and is a string",
                    },
                grades: {
                    bsonType: "array",
                    description: "'grades' is required and is a string",
                    },
           },
       },
   };
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "restaurants",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("restaurants", {validator: jsonSchema});
       }
   });
}