import { NextApiRequest, NextApiResponse } from 'next';
import { Launch } from '../../../interfaces';

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Launch[]>) {
  // limit is auto set to 10 items on POST request
  const launchesRes = await fetch('https://api.spacexdata.com/v4/launches/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      options: {
        populate: ['payloads'],
      },
    }),
  }).then((res) => res.json());

  // convert api json data to a frontend type for easability
  const launchesTyped: Launch[] = launchesRes.docs.map(
    (launch: any) =>
      ({
        id: launch.id,
        name: launch.name,
        date: launch.date_utc,
        core: launch.cores[0].core,
        imageSrc: launch.links.patch.small,
        status: launch.success,
        details: launch.details,
        payloads: launch.payloads.map((payload: any) => ({ id: payload.id, type: payload.type })),
      } as Launch)
  );

  return res.status(200).json(launchesTyped);
}
