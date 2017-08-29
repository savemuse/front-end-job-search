import client from '../helpers/ApiClient';

export const getJobsCountApi = () => client.get(`https://api.github.com/repos/f2etw/jobs`);
export const getJobsApiByPage = (page) => client.get(`https://api.github.com/repos/f2etw/jobs/issues?page=${page}`);
export const getLabelsApi = (page) => client.get(`https://api.github.com/repos/f2etw/jobs/labels?page=${page}`);

export const api = {
  getJobsCountApi,
  getJobsApiByPage,
  getLabelsApi,
};
