import React, { Component } from 'react'
import PropTypes from 'prop-types';
import JobItem from './JobItem';

class JobList extends Component {
  componentDidMount() {
    this.props.getJobsRequest();
  }

  render() {
    const { filter_jobs, loading } = this.props;

    if (loading) {
      return (
        <div className="text-align-center empty-container">
          <h3>資料加載中。</h3>
        </div>
      )
    }

    if (filter_jobs.length === 0) {
      return (
        <div className="text-align-center empty-container">
          <h3>您查詢的資料尚無結果，請修改您的查詢條件。</h3>
        </div>
      )
    }

    return (
      <div className="card-container">
        <div className="text-align-center">
          <h3>{`查詢結果共${filter_jobs.length || 0}筆`}</h3>
        </div>
        <ul>
          { filter_jobs.map((job) => (
              <li key={job.id}>
                <JobItem job={job}/>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

JobList.propTypes = {
  loading: PropTypes.bool.isRequired,
  filter_jobs: PropTypes.array.isRequired,
  getJobsRequest: PropTypes.func.isRequired,
}

export default JobList;
