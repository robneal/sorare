import type { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect";
import cors from "cors";

const handler = nc().use(cors()).post(async (req: NextApiRequest, res: NextApiResponse) => {
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...req.body})
    }
    const response = await (await fetch('https://api.sorare.com/graphql', config)).json();
    res.send(response);
  });

export default handler;