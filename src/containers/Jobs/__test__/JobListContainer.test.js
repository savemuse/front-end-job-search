/* eslint-disable */
jest.mock('../JobList');

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import storeFake from '../../../utils/testUtil';
import JobList from '../JobList';
import JobListContainer from '../JobListContainer';

describe('container <JobList />', () => {
  let subject;
  let component;
  let jobListComponent;

  beforeEach(() => {
    const store = storeFake({
      jobs: {
        loading: false,
        initial_jobs: [],
        filter_jobs: [],
      }
    });
    subject = mount(
      <Provider store={store}>
        <JobListContainer />
      </Provider>
    );

    component = subject.find(JobListContainer);
    jobListComponent = component.find(JobList);
  });

  it('should be called exactly once', () => {
    expect(JobList.mock.calls.length).toBe(1);
  });

  it('should render', () => {
    expect(component.length).toBeTruthy();
    expect(jobListComponent.length).toBeTruthy();
  });

  it('should execute the dispatch function after calling the getJobsRequest function', () => {
    jobListComponent.props().getJobsRequest();
    expect(subject.instance().store.dispatch).toBeCalled();
  });

  it('should be same as snapshot', () => {
    expect(toJson(jobListComponent)).toMatchSnapshot();
  });
});
