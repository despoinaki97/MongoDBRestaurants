import * as mongodb from "mongodb";
 
export interface restaurant {
   name: string;
   borough: string;
   cuisine: string;
   restaurant_id: string;
   grades: grade[];
   _id?: mongodb.ObjectId;
}

interface grade{
   date: Date;
   grade: string;
   score: mongodb.Int32;
}