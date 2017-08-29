import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Tags from '../Tags';

const muiTheme = getMuiTheme();

describe('<Tags />', function () {
  beforeEach(() => {
    jest.resetModules();
    this.params = {};

    this.makeSubject = () => {
      const { labels } = this.params;
      return mount(
        <Tags labels={labels} />, 
        {
          context: {muiTheme},
          childContextTypes: {muiTheme: PropTypes.object}
        }
      );
    };
  });

  describe('when it has complete data', () => {
    beforeEach(() => {
      this.params.labels = [
        {
          "id": 246844499,
          "url": "https://api.github.com/repos/f2etw/jobs/labels/Scrum",
          "name": "Scrum",
          "color": "f7c6c7",
          "default": false
        },
        {
          "id": 246844528,
          "url": "https://api.github.com/repos/f2etw/jobs/labels/unit%20test",
          "name": "unit test",
          "color": "207de5",
          "default": false
        },
        {
          "id": 173167732,
          "url": "https://api.github.com/repos/f2etw/jobs/labels/%E5%B9%B4%E8%96%AA%E7%99%BE%E8%90%AC",
          "name": "年薪百萬",
          "color": "fbca04",
          "default": false
        },
        {
          "id": 162015175,
          "url": "https://api.github.com/repos/f2etw/jobs/labels/%E6%B1%82%E6%89%8D",
          "name": "求才",
          "color": "006b75",
          "default": false
        },
        {
          "id": 247335771,
          "url": "https://api.github.com/repos/f2etw/jobs/labels/%E6%B5%B7%E5%A4%96",
          "name": "海外",
          "color": "bfdadc",
          "default": false
        }
      ]

      this.subject = this.makeSubject();
    });

    it('should be same as snapshot', () => {
      expect(toJson(this.subject)).toMatchSnapshot();
    });

    it('should display all the tags', () => {
      expect(this.subject.text()).toEqual('Scrumunit test年薪百萬求才海外');
    });
  });

  describe('when it has no data', () => {
    beforeEach(() => {
      this.params.labels = [];
      this.subject = this.makeSubject();
    });

    it('should be same as snapshot', () => {
      expect(toJson(this.subject)).toMatchSnapshot();
    });

    it('should not display any skill tag', () => {
      expect(this.subject.find('span').length).toEqual(0);
    });
  });
});