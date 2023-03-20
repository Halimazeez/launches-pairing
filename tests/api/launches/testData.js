export const testData = [
  {
    id: 'falconsat123',
    name: 'FalconSat',
    date_utc: '2006-03-24T22:30:00.000Z',
    cores: [
      {
        core: '5e9e289df35918033d3b2623',
      },
    ],
    links: {
      patch: {
        small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
      },
    },
    success: false,
    details: 'Engine failure at 33 seconds and loss of vehicle',
    payloads: [
      {
        type: 'Satellite',
        id: '5eb0e4b5b6c3bb0006eeb1e1',
      },
    ],
  },
  {
    id: 'demosat123',
    name: 'DemoSat',
    date_utc: '2007-03-21T01:10:00.000Z',
    cores: [
      {
        core: '5e9e289ef35918416a3b2624',
      },
    ],
    links: {
      patch: {
        small: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
      },
    },
    success: false,
    details:
      'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
    payloads: [
      {
        type: 'Satellite',
        id: '5eb0e4b6b6c3bb0006eeb1e2',
      },
    ],
  },
  {
    id: 'cots123',
    name: 'COTS 1',
    date_utc: '2010-12-08T15:43:00.000Z',
    cores: [
      {
        core: '5e9e289ef35918187c3b2629',
      },
    ],
    links: {
      patch: {
        small: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
      },
    },
    success: true,
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
