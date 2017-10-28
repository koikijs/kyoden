import { normalize } from 'koiki';
import config from './config';

const base = normalize(`${config.api.host}:${config.api.port}`);

export default {
  person: {
    gets: {
      url: `${base}/apis/koiki/people`,
      method: 'GET'
    }
  },
  hobby: {
    gets: {
      url: `${base}/apis/koiki/hobbies`
    }
  }
};
