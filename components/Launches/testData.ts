import { Launch } from '../../types/Launch';

export const testLaunches: Launch[] = [
  {
    id: 'falconsat123',
    name: 'FalconSat',
    date: '2006-03-24T22:30:00.000Z',
    core: '5e9e289df35918033d3b2623',
    imageSrc: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
    status: false,
    details: 'Engine failure at 33 seconds and loss of vehicle',
    payloads: [
      {
        type: 'Satellite',
        id: '5eb0e4b5b6c3bb0006eeb1e1',
      },
    ],
  },
  {
    id: 'cots123',
    name: 'COTS 1',
    date: '2010-12-08T15:43:00.000Z',
    core: '5e9e289ef35918187c3b2629',
    imageSrc: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
    status: true,
    details: 'Launch was scrubbed on first attempt, second launch attempt was successful',
    payloads: [
      {
        type: 'Dragon 1.0',
        id: '5eb0e4b9b6c3bb0006eeb1e8',
      },
      {
        type: 'Satellite',
        id: '5eb0e4b9b6c3bb0006eeb1e9',
      },
    ],
  },
];
