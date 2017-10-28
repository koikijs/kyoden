import { normalize } from 'koiki';
import config from './config';

const base = normalize(`${config.api.host}:${config.api.port}`);

export default {
  events: {
    save: {
      url: `${base}/events`,
      method: 'POST',
    },
  },
  scrooge: {
    add: {
      url: `${base}/events/:id/scrooges`,
      method: 'POST',
    },
    update: {
      url: `${base}/scrooges/:id`,
      method: 'PATCH',
    },
    delete: {
      url: `${base}/scrooges/:id`,
      method: 'DELETE',
    },
  },
};
