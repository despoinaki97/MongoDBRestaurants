export interface restaurant {
    name: string;
   borough: string;
   cuisine: string;
   restaurant_id: string;
   grades: grade[];
   _id?: string;
 }

 interface grade{
    date: Date;
    grade: string;
    score: number;
 }