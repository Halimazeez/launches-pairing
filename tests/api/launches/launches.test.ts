import axios from 'axios';
import { createMocks } from 'node-mocks-http';
import { Launch } from '../../../interfaces';

import launches from '../../../pages/api/launches';
import { testData } from './testData';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('api/Launches ', () => {
  it('should sucessfully return an array of Launch typed mocked data', async () => {
    mockedAxios.post.mockResolvedValue({ data: { docs: testData } });

    // create mocked node server
    const { req, res } = createMocks({
      method: 'POST',
    });

    await launches(req, res);

    expect(res.statusCode).toBe(200);

    const data: Launch[] = res._getJSONData();

    expect(data.length === testData.length);

    // Launch type check
    expect(data[0]).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      date: expect.any(String),
      core: expect.any(String),
      imageSrc: expect.any(String),
      status: expect.any(Boolean),
      details: expect.any(String),
      payloads: expect.any(Array),
    });
  });
});
