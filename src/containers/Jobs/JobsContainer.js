import { connect } from 'react-redux';
import Jobs from './Jobs';
import { 
  getLabelsRequest,
  filterJobsRequest,
} from '../../redux/modules/jobs/action';

const mapStateToProps = state => {
  const { labels } = state.jobs;
  return {
    labels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLabelsRequest: () => {
      dispatch(getLabelsRequest());
    },
    filterJobsRequest: (params) => {
      dispatch(filterJobsRequest(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs);