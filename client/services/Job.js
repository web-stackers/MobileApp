import axios from 'axios';

// Adding new third party user in the database
const addNew = async (data) => {
  return await axios.post('/job', data);
};

//  Fetch Job details by id
const fetchJob = async (id) => {
  return await axios.get(`/job/${id}`)
}

export default {
  addNew,
  fetchJob
};
