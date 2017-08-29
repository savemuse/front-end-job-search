/* eslint-disable */
jest.mock('../Jobs');

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import storeFake from '../../../utils/testUtil';
import Jobs from '../Jobs';
import JobsContainer from '../JobsContainer';

describe('container <JobList />', () => {
  let subject;
  let component;
  let jobsComponent;

  beforeEach(() => {
    const store = storeFake({
      jobs: {
        labels: [
          'GIT',
          'unit test',
          'Full Stack',
          '[F] React',
          '[F] Vue.js',
          '[F] D3.js',
          '[B] NodeJS',
          '[B] GraphQL',
          '[B] ROR',
          '年薪百萬',
        ]
      }
    });
    subject = mount(
      <Provider store={store}>
        <JobsContainer />
      </Provider>
    );

    component = subject.find(JobsContainer);
    jobsComponent = component.find(Jobs);
  });

  it('should be called exactly once', () => {
    expect(Jobs.mock.calls.length).toBe(1);
  });

  it('should execute the dispatch function after calling the getLabelsRequest function', () => {
    jobsComponent.props().getLabelsRequest();
    expect(subject.instance().store.dispatch).toBeCalled();
  });

  it('should be same as snapshot', () => {
    expect(toJson(jobsComponent)).toMatchSnapshot();
  });
});
