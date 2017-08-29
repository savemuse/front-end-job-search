import { connect } from 'react-redux';
import JobList from './JobList';
import { getJobsRequest } from '../../redux/modules/jobs/action';

const mapStateToProps = state => {
  const { loading, filter_jobs } = state.jobs;
  return {
    loading,
    filter_jobs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobsRequest: () => {
      dispatch(getJobsRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);