import DB from './../../../database/db';
import { NextApiRequest, NextApiResponse } from "next";
const oneAvo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  const id = request.query.id;
  const entry = await db.getById(id as string);
  response.setHeader('Content-type','application/json')
  response.status(200).json({data: entry})
}

export default oneAvo;