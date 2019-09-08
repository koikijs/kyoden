import { normalize } from './helpers/url';
import config from './config';

const base = normalize(`${config.api.host}:${config.api.port}`);

export default {
  event: {
    save: {
      url: `${base}/events/_create`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    },
  },
  group: {
    add: {
      url: `${base}/events/:id/groups/_add`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    },
    remove: {
      url: `${base}/groups/:group`,
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    },
    updateName: {
      url: `${base}/groups/:group/_updateName`,
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
    },
    addMember: {
      url: `${base}/groups/:group/_addMemberName`,
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      // values
      // { memberName: "hoge" }
    },
    removeMember: {
      url: `${base}/groups/:group/_removeMemberName`,
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      // values
      // { memberName: "hoge" }
    },
  },
  scrooge: {
    add: {
      url: `${base}/groups/:group/scrooges`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    },
    update: {
      url: `${base}/scrooges/:scrooge`,
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
    },
    remove: {
      url: `${base}/scrooges/:scrooge`,
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    },
  },
};
