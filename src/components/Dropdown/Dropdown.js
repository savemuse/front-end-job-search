import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Dropdown extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.filter !== this.props.filter || 
      nextProps.menuList.length !== this.props.menuList.length;
  }
  
  handleChange = (event, index, value) => {
    this.props.handleFilterChange(value);
  };

  render() {
    const { menuList, filter } = this.props;
    
    return (
      <SelectField
        hintText="Filter labels"
        floatingLabelText="Filter labels"
        value={filter}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {menuList && menuList.map((item, idx) => (
          <MenuItem
            key={idx}
            value={item}
            primaryText={item} 
          />
        ))}
      </SelectField>
    );
  }
}

export default Dropdown;