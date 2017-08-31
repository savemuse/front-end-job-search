import { connect } from 'react-redux';
import JobList from './JobList';
import { 
  getJobsRequest,
  filterJobsRequest,
} from '../../redux/modules/jobs/action';

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
    filterJobsRequest: (params) => {
      dispatch(filterJobsRequest(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);