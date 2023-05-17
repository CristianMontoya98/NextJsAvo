import DB from './../../../database/db';
import { NextApiRequest, NextApiResponse } from "next";
const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const quantity = allEntries.length;
  response.setHeader('Content-type','application/json')
  response.status(200).json(
    {
      quantity,
      data: allEntries
    }
  )
}

export default allAvos;