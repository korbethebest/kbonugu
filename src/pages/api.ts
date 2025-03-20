import mysql from "mysql2/promise";
import type { NextApiRequest, NextApiResponse } from "next";


const dbConfig = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

type Player = {
  id: number;
  name: string;
  team: string;
  position: string;
  age: number;
  backnumber: string;
  draftyear: number;
  image: string;  
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Player[] | { error: string }>) {
    try {
      const connection = await mysql.createConnection(dbConfig);
  
      const [rows] = await connection.execute('SELECT * FROM kboplayers');

      await connection.end();
  
      res.status(200).json(rows as Player[]);
    } catch (error) {
      console.error('Error connecting to RDS:', error);
      res.status(500).json({ error: 'Failed to fetch data from RDS' });
    }
}
