import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SearchBar from '../SearchBar';
const muiTheme = getMuiTheme();

describe('<SearchBar />', function () {
  let searchBar;
  beforeEach(() => {
    jest.resetModules();
    this.params = {
      handleChange: jest.fn()
    };

    this.makeSubject = () => {
      const { handleChange } = this.params;

      searchBar = mount(
        <SearchBar handleChange={handleChange} />, 
        {
          context: {muiTheme},
          childContextTypes: {muiTheme: PropTypes.object}
        }
      );
      return searchBar;
    };
  });

  describe('when it has complete data', () => {
    beforeEach(() => {
      this.subject = this.makeSubject();
    });
    it('should be same as snapshot', () => {
      expect(toJson(searchBar)).toMatchSnapshot();
    });

    it('should requires handleChange prop', () => {
      expect(searchBar.props().handleChange).toBeDefined();
    });

    it('key in `react` then trigger change event', () => {
      searchBar.find('input').simulate('change', { target: { value: 'react' }});
      expect(this.params.handleChange).toBeCalledWith('react');
    });
  });
});