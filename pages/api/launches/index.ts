import { NextApiRequest, NextApiResponse } from 'next';
import { Launch } from '../../../interfaces';

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Launch[]>) {
  const launchesRes = await fetch('https://api.spacexdata.com/v4/launches/query', {
    method: 'POST',
  }).then((res) => res.json());

  const launchesTyped = launchesRes.docs.map((launch: any) => ({
    id: launch.id,
    name: launch.name,
  }));

  return res.status(200).json(launchesTyped);
  // return res.status(200).json([{}] as Launch[]);
}
