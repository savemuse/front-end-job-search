import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import JobListContainer from '../Jobs/JobListContainer';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Jobs.scss';
const styles = {
  button: {
    margin: '28px 10px 0 10px',
    boxShadow: 'none',
  },
};

class Jobs extends Component {
  constructor(props) {
		super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      text: '',
      filter: null
    };
	}

  componentDidMount() {
    this.props.getLabelsRequest();
  }
  
  handleFilterChange = (value) => {
    this.setState({
      filter: value
    });
  }

  handleChange = (value) => {
    this.setState({
      text: value
    });
  }

  handleSearch = () => {
    const params = {...this.state};
    this.props.filterJobsRequest(params);
  }
  
  render() {
    const { filter } = this.state;
    const { labels } = this.props;

    return (
      <div>
        <div className="input-container">
          <Dropdown
            filter={filter}
            menuList={labels}
            handleFilterChange={this.handleFilterChange}
          />
          <SearchBar
            handleChange={this.handleChange}
          />
          <RaisedButton
            style={styles.button}
            label="SEARCH"
            primary={true}
            onClick={this.handleSearch}
          />
        </div>
        <JobListContainer/>
      </div>
    );
  }
}

Jobs.propTypes = {
  labels: PropTypes.array.isRequired,
  getLabelsRequest: PropTypes.func.isRequired,
  filterJobsRequest: PropTypes.func.isRequired,
}

export default Jobs;