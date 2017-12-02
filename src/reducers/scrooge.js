
const GETS_START = 'scrooge/GETS_START';
const GETS_SUCCESS = 'scrooge/GETS_SUCCESS';
const GETS_FAIL = 'scrooge/GETS_FAIL';
const INPUT = 'scrooge/INPUT';
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
