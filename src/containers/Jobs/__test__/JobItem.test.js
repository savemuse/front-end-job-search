import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import JobItem from '../JobItem';
import mockJob from './mocks/mockJob.json';
const muiTheme = getMuiTheme();

describe('<JobItem />', function () {
  let jobItem;
  beforeEach(() => {
    jest.resetModules();
    this.params = {
      job: undefined
    };

    this.makeSubject = () => {
      const { job } = this.params;

      jobItem = mount(
        <JobItem job={job} />, 
        {
          context: {muiTheme},
          childContextTypes: {muiTheme: PropTypes.object}
        }
      );
      return jobItem;
    };
  });

  describe('when it has complete data', () => {
    beforeEach(() => {
      this.params.job = mockJob;
      this.subject = this.makeSubject();
    });
    it('should be same as snapshot', () => {
      expect(toJson(jobItem)).toMatchSnapshot();
    });

    it('the title should be same as `[徵才]硅谷铃盛 前端开发工程师 Front End Engineer 年薪100-200W`', () => {
      expect(jobItem.find('span').first().text().trim()).toEqual('[徵才]硅谷铃盛 前端开发工程师 Front End Engineer 年薪100-200W');
    });

    it('the post should be update at `2015-08-13 16:39:36`', () => {
      expect(jobItem.find('span').at(1).text().trim()).toEqual('2015-08-13 16:39:36');
    });

    it('the image of avatar should be same as `https://avatars1.githubusercontent.com/u/13757360?v=4`', () => {
      expect(jobItem.find('img').prop('src')).toEqual('https://avatars1.githubusercontent.com/u/13757360?v=4');
    });
  });
});