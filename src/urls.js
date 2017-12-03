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
      mode: 'cors',
      credentials: 'include'
    },
    update: {
      url: `${base}/events/:id/scrooges/:scrooge`,
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include'
    },
    bulkRemove: {
      url: `${base}/events/:id/scrooges`,
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
      useQuery: true,
    },
    remove: {
      url: `${base}/events/:id/scrooges/:scrooge`,
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include'
    },
  },
};
