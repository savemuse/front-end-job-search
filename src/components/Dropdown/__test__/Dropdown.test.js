import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dropdown from '../Dropdown';
const muiTheme = getMuiTheme();

describe('<Dropdown />', function () {
  let dropdown;
  beforeEach(() => {
    jest.resetModules();
    this.params = {
      menuList: [],
      filter: undefined,
      handleFilterChange: jest.fn()
    };

    this.makeSubject = () => {
      const { 
        menuList,
        filter,
        handleFilterChange
      } = this.params;

      dropdown = shallow(
        <Dropdown
          menuList={menuList}
          filter={filter}
          handleFilterChange={handleFilterChange}
        />, 
        {
          context: {muiTheme},
          childContextTypes: {muiTheme: PropTypes.object}
        }
      );
      return dropdown;
    };
  });

  describe('when it has complete data', () => {
    beforeEach(() => {
      this.params.menuList = [
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

      this.subject = this.makeSubject();
    });

    it('should be same as snapshot', () => {
      expect(toJson(dropdown)).toMatchSnapshot();
    });

    it('should be equal `GIT` for first option', () => {
      expect(dropdown.find(MenuItem).first().props().value).toEqual('GIT');
      expect(dropdown.find(MenuItem).at(0).props().primaryText).toEqual('GIT');
    });

    it('should be equal `unit test` for second option', () => {
      expect(dropdown.find(MenuItem).at(1).props().primaryText).toEqual('unit test');
    });
  });
});