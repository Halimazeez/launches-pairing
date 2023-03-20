import React from 'react';
import { mount } from 'cypress/react18';

import Launches from './index';
import { testLaunches } from './testData';

describe('<Launches />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Launches launches={testLaunches} />);
  });

  it('should contain two children', () => {
    mount(<Launches launches={testLaunches} />);

    cy.get('[data-cy="launches-grid"]').children().should('have.length', 2);
  });
});
