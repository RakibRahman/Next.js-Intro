import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string;
    year: number;
}[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json([{
        name: 'Horizon',
        year: 2017
    }])
}