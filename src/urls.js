import { normalize } from 'koiki';
import config from './config';

const base = normalize(`${config.api.host}:${config.api.port}`);

export default {
  event: {
    gets: {
      ws: '/events/:id',
      method: 'GET',
    },
    save: {
      url: `${base}/events`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    },
  },
  scrooge: {
    add: {
      url: `${base}/events/:id/scrooges`,
      method: 'POST',
      credentials: 'include'
    },
    update: {
      url: `${base}/scrooges/:id`,
      method: 'PATCH',
      credentials: 'include'
    },
    delete: {
      url: `${base}/scrooges`,
      method: 'DELETE',
      credentials: 'include'
    },
  },
};
