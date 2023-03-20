import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { Launch } from '../../../interfaces';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Launch[]>) {
  // limit is auto set to 10 items on POST request
  const launchesRes = await axios.post('https://api.spacexdata.com/v4/launches/query', {
    options: {
      populate: ['payloads'],
    },
  });

  // convert api json data to a frontend type for easability
  const launchesTyped: Launch[] = launchesRes.data.docs.map(
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
