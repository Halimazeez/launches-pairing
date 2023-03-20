import axios from 'axios';
import { createMocks } from 'node-mocks-http';

import { Launch } from '../../../types/Launch';
import launches from '../../../pages/api/launches';

import { testData } from './testData';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('api/Launches ', () => {
  it('should sucessfully return an array of typed mocked Launches', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    // mock response from api with test data
    mockedAxios.post.mockResolvedValue({ data: { docs: testData } });

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

  it('should return an Error if the request failed', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    // mock rejection from api with Error
    mockedAxios.post.mockRejectedValue(new Error('Error getting data from spaceX'));

    await expect(launches(req, res)).rejects.toThrow('Error getting data from spaceX'); // Success!
  });
});
