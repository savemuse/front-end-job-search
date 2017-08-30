import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import JobList from '../JobList';
import mockJobList from './mocks/mockJobList.json';
const muiTheme = getMuiTheme();

describe('<JobList />', function () {
  let jobList;
  beforeEach(() => {
    jest.resetModules();
    this.params = {
      filter_jobs: [],
      loading: false,
      getJobsRequest: jest.fn(),
    };

    this.makeSubject = () => {
      const { filter_jobs, loading, getJobsRequest } = this.params;

      jobList = mount(
        <JobList
          filter_jobs={filter_jobs}
          loading={loading}
          getJobsRequest={getJobsRequest}
        />, 
        {
          context: {muiTheme},
          childContextTypes: {muiTheme: PropTypes.object}
        }
      );
      return jobList;
    };
  });

  describe('when it has complete data', () => {
    beforeEach(() => {
      this.params.filter_jobs = mockJobList;
      this.subject = this.makeSubject();
    });
    it('should be same as snapshot', () => {
      expect(toJson(jobList)).toMatchSnapshot();
    });

    it('should have 2 items', () => {
      expect(jobList.find('JobItem').length).toBe(2);
    });
  });

  describe('when it is still loading', () => {
    beforeEach(() => {
      this.params.filter_jobs = [];
      this.params.loading = true;
      this.subject = this.makeSubject();
    });

    it('should be same as snapshot', () => {
      expect(toJson(jobList)).toMatchSnapshot();
    });

    it('should output `資料加載中。`', () => {
      expect(jobList.find('h3').text()).toEqual('資料加載中。');
    });
  });

  describe('when it has no any data', () => {
    beforeEach(() => {
      this.params.filter_jobs = [];
      this.subject = this.makeSubject();
    });

    it('should be same as snapshot', () => {
      expect(toJson(this.subject)).toMatchSnapshot();
    });

    it('should output `您查詢的資料尚無結果，請修改您的查詢條件。`', () => {
      expect(jobList.find('h3').text()).toEqual('您查詢的資料尚無結果，請修改您的查詢條件。');
    });
  });
});