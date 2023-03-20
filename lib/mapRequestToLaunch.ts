import { Launch } from '../types/Launch';
import { LaunchResponse } from '../types/LaunchResponse';

export default function mapRequestToLaunch(launch: LaunchResponse): Launch {
  try {
    // convert api json data to a frontend type
    const launchesTyped: Launch = {
      id: launch.id,
      name: launch.name,
      date: launch.date_utc,
      core: launch.cores[0].core,
      imageSrc: launch.links.patch.small,
      status: launch.success,
      details: launch.details,
      payloads: launch.payloads.map((payload: any) => ({ id: payload.id, type: payload.type })),
    };

    return launchesTyped;
  } catch (error) {
    throw new Error('Error mapping api response to Launch');
  }
}
