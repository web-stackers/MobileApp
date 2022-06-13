import axios from 'axios';

//adding new third party user in the database
const addNew = async data => {
  return await axios.post('/job', data);
};

export default {
  addNew,
};
