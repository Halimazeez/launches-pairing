import React from 'react';
import LaunchComponent from './index';
import { testLaunches } from './testData';

import { mount } from 'cypress/react18';

describe('<LaunchComponent />', () => {
  it('renders', () => {
    mount(<LaunchComponent launch={testLaunches[0]} />);
  });

  it('should have red status text for a failed launch', () => {
    mount(<LaunchComponent launch={testLaunches[0]} />);
    cy.get('[data-cy="status-text"]').should('have.css', 'color', 'rgb(217, 83, 79)');
  });

  it('should show failure reason for a failed launch', () => {
    mount(<LaunchComponent launch={testLaunches[0]} />);
    cy.get('[data-cy="reason"]');
  });

  it('should have green status text for a successful launch', () => {
    mount(<LaunchComponent launch={testLaunches[1]} />);
    cy.get('[data-cy="status-text"]').should('have.css', 'color', 'rgb(92, 184, 92)');
  });

  it('should not show details for a sucessful launch', () => {
    mount(<LaunchComponent launch={testLaunches[1]} />);
    cy.get('[data-cy="reason"]').should('not.exist');
  });
});
