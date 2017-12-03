
const GETS_START = 'scrooge/GETS_START';
const GETS_SUCCESS = 'scrooge/GETS_SUCCESS';
const GETS_FAIL = 'scrooge/GETS_FAIL';
const INPUT = 'scrooge/INPUT';
const RESET = 'scrooge/RESET';
const MARK_AS_REMOVED = 'scrooge/MARK_AS_REMOVED';
const EVENT_GET_SUCCESS = 'event/GET_SUCCESS';

const initialState = {
  item: {},
  items: [],
  loaded: false,
  loading: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GETS_START:
      return {
        ...state,
        loading: true
      };
    case GETS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.body.items
      };
    case EVENT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.body.item.scrooges.filter(scrooge => scrooge.paidAmount),
      };
    case GETS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.err
      };
    case INPUT:
      return {
        ...state,
        item: {
          ...state.item,
          ...action.scrooge,
        }
      };
    case RESET:
      return {
        ...state,
        item: {}
      };
    case MARK_AS_REMOVED:
      return {
        ...state,
        items: state.items.map(scrooge =>
          (action.scrooge.id === scrooge.id ? {
            ...scrooge,
            removed: true,
          } : scrooge)
        )
      };
    default:
      return state;
  }
}

export function input(scrooge) {
  return {
    type: INPUT,
    scrooge,
  };
}

export function markAsRemoved(scrooge) {
  return {
    type: MARK_AS_REMOVED,
    scrooge,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
