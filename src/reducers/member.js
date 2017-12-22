import _ from 'lodash';

const GETS_START = 'member/GETS_START';
const EVENT_GET_SUCCESS = 'event/GET_SUCCESS';
const GETS_FAIL = 'member/GETS_FAIL';
const CHANGE_INPUT_NAME = 'member/CHANGE_INPUT_NAME';

const initialState = {
  suggests: [],
  items: [],
  loaded: false,
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GETS_START:
      return {
        ...state,
        loading: true
      };
    case EVENT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: _.uniq(action.body.item.scrooges
          .filter(amount => amount.paidAmount === 0)
          .map(amount => ({
            id: amount.memberName,
            name: amount.memberName,
          })))
      };
    case GETS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.err
      };
    case CHANGE_INPUT_NAME:
      return {
        ...state,
        suggests: action.val ? [{
          id: action.val,
          name: action.val,
        }] : [],
      };
    default:
      return state;
  }
}

export function changeInputName(val) {
  return {
    type: CHANGE_INPUT_NAME,
    val,
  };
}
