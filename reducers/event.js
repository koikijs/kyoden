import _ from 'lodash';

const GET_START = 'event/GET_START';
const GET_SUCCESS = 'event/GET_SUCCESS';
const GET_FAIL = 'event/GET_FAIL';
const SAVE_START = 'event/SAVE_START';
const SAVE_SUCCESS = 'event/SAVE_SUCCESS';
const SAVE_FAIL = 'event/SAVE_FAIL';
const CHANGE = 'event/CHANGE';
const SELECT_GROUP = 'event/SELECT_GROUP';

const initialState = {
  item: {
    name: '',
    transferAmounts: [],
    groups: [
      {
        id: '',
        name: '',
        scrooges: [],
        memberNames: [],
      },
    ],
  },
  selected: {
    id: '',
    name: '',
    scrooges: [],
    memberNames: [],
  },
  loaded: false,
  loading: false,
  selectedGroup: undefined,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_START:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCCESS: {
      const selected = state.selected.id
        ? action.item.groups.find(group => group.id === state.selected.id)
        : action.item.groups[0];
      return {
        ...state,
        loading: false,
        loaded: true,
        item: action.item,
        selected: {
          ...selected,
          scrooges: selected.scrooges.filter(scrooge => scrooge.paidAmount),
        },
      };
    }
    case SELECT_GROUP: {
      const selected = state.item.groups.find(group => group.id === action.id);
      return {
        ...state,
        selected: {
          ...selected,
          scrooges: selected.scrooges.filter(scrooge => scrooge.paidAmount),
        },
      };
    }
    case GET_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.err,
      };
    case SAVE_START:
      return {
        ...state,
        loading: true,
      };
    case SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SAVE_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CHANGE:
      return {
        ...state,
        ...action.values,
      };
    default:
      return state;
  }
}

export function get(item) {
  return {
    type: GET_SUCCESS,
    body: {
      item,
    },
  };
}

export function change(values) {
  return {
    type: CHANGE,
    values,
  };
}

export function getStart() {
  return {
    type: GET_START,
  };
}

export function selectGroup({ id, name }) {
  return {
    type: SELECT_GROUP,
    id,
    name,
  };
}
