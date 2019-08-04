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
    groups: [{ id: '', name: '', scrooges: [] }],
  },
  selected: {
    id: '',
    name: '',
    scrooges: [],
    members: [],
  },
  loaded: false,
  loading: false,
  selectedGroup: undefined,
};

const getMembers = scrooges => _.uniqBy(
  scrooges
    .filter(amount => amount.paidAmount === 0)
    .map(amount => ({
      id: amount.memberName,
      name: amount.memberName,
    })),
  'id',
) || [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_START:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCCESS: {
      // TODO: Remove inject code to add groups after API implemented v2
      const item = {
        ...action.body.item,
        transferAmounts: (action.body.item.transferAmounts || []).filter(amount => amount.amount),
        groups: [
          { id: 'corona-fes', name: 'Corona Fes', scrooges: action.body.item.scrooges },
          { id: 'iida-x-nab', name: 'Iida x Nab', scrooges: [] },
        ],
      };

      const selected = state.selected.id ? state.selected : item.groups[0];
      return {
        ...state,
        loading: false,
        loaded: true,
        item,
        selected: {
          ...selected,
          scrooges: selected.scrooges.filter(scrooge => scrooge.paidAmount),
          members: getMembers(selected.scrooges),
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
          members: getMembers(selected.scrooges),
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

export function saveStart(item) {
  return {
    type: SAVE_START,
  };
}

export function saveSuccess(body) {
  return {
    type: SAVE_SUCCESS,
    body,
  };
}

export function saveFail(body) {
  return {
    type: SAVE_FAIL,
    body,
  };
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
