import { IncomingMessage, ServerResponse } from "http";
import DB from './../../../database/db';
const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const quantity = allEntries.length;
  response.statusCode = 200;
  response.setHeader('Content-type','application/json')
  response.end(JSON.stringify({
    quantity,
    data: allEntries
  }))
}

export default allAvos;