import axios from 'axios';

import { LaunchesResponse } from '../types/LaunchResponse';

export default async function getLaunches(): Promise<LaunchesResponse | Error> {
  // limit is auto set to 10 items on POST request
  const response = await axios.post('https://api.spacexdata.com/v5/launches/query', {
    options: {
      populate: ['payloads'],
    },
  });

  const launchesResponse: LaunchesResponse = response.data;

  if (!launchesResponse || !launchesResponse.docs) {
    return new Error('Error getting data from spaceX');
  }

  return launchesResponse;
}
