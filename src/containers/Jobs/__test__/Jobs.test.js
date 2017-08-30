import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import storeFake from '../../../utils/testUtil';
import Jobs from '../Jobs';
import mockLabels from '../../../redux/modules/jobs/__test__/mocks/mockLabels.json';
import mockJobList from '../__test__/mocks/mockJobList.json';
const muiTheme = getMuiTheme();

describe('Jobs', function () {
  let jobs;
  
  beforeEach(() => {
    jest.resetModules();
    const store = storeFake({
      jobs: {
        loading: false,
        initial_jobs: [],
        filter_jobs: [],
      }
    });

    this.params = {
      labels: [],
      getLabelsRequest: jest.fn(),
      filterJobsRequest: jest.fn(),
    };

    this.makeSubject = () => {
      jobs = mount(
        <Jobs {...this.params} />, 
        {
          context: {
            muiTheme: muiTheme,
            store: store,
          },
          childContextTypes: {
            muiTheme: PropTypes.object,
            store: PropTypes.object,
          }
        }
      );
      return jobs;
    };
  });

  describe('search result when filter is `求才` and condition is `Codementor`', () => {
    beforeEach(() => {
      const store = storeFake({
        jobs: {
          loading: false,
          initial_jobs: mockJobList,
          filter_jobs: mockJobList,
        }
      });
      this.params.labels = mockLabels;
      jobs = mount(
        <Jobs {...this.params} />, 
        {
          context: {
            muiTheme: muiTheme,
            store: store,
          },
          childContextTypes: {
            muiTheme: PropTypes.object,
            store: PropTypes.object,
          }
        }
      );
    });

    it('the filter should be same as `求才` and condition should be same as `Codementor`', () => {
      const dropdown = jobs.find('Dropdown').first();
      const search = jobs.find('SearchBar').first();
      dropdown.props().handleFilterChange('求才');
      search.props().handleChange('Codementor');
      expect(jobs.state('filter')).toEqual('求才');
      expect(jobs.state('text')).toEqual('Codementor');
    });
    
    it('should be same as 2 results', () => {
      const button = jobs.find('RaisedButton').first();
      const params = {
        filter: '求才',
        text: 'Codementor'
      };
      jobs.setState(params);
      button.props().onClick(params);
      jobs.update();
      expect(toJson(jobs)).toMatchSnapshot();
      expect(jobs.find('CardHeader').length).toBe(2);
      expect(jobs.find('CardHeader').first().prop('title')).toEqual('【徵才】Codementor誠徵資深全端工程師');
    });
  });
});