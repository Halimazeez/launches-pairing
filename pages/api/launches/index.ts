import { NextApiRequest, NextApiResponse } from 'next';

import getLaunches from '../../../lib/getLaunches';
import mapRequestToLaunch from '../../../lib/mapRequestToLaunch';

import { Launch } from '../../../types/Launch';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Launch[]>) {
  const response = await getLaunches();

  if (response instanceof Error) {
    res.status(404).end();
    return;
  }

  const launchesTyped = response.docs.map((launch: any) => mapRequestToLaunch(launch));

  return res.status(200).json(launchesTyped);
}
