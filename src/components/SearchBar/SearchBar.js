import React from 'react';
import TextField from 'material-ui/TextField';
import './SearchBar.scss';

const SearchBar = (props) => {
  return (
		<div className="text-field">
			<TextField
				id="exfront-end-keyword-1"
				fullWidth={true}
				hintText="ex: front-end"
				floatingLabelText="keyword"
				onChange={(event, value) => props.handleChange && props.handleChange(value)}
			/><br />    
		</div>
	)
};

export default SearchBar;
