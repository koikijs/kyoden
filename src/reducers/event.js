
const GET_START = 'event/GET_START';
const GET_SUCCESS = 'event/GET_SUCCESS';
const GET_FAIL = 'event/GET_FAIL';

const initialState = {
  item: {
    name: 'koicam',
    aggPaidAmount: [
      {
        memberName: 'nabnab',
        paidAmount: 200,
      },
      {
        memberName: 'sideroad',
        paidAmount: 5000,
      },
      {
        memberName: 'taka66',
        paidAmount: 14000,
      },
      {
        memberName: 'ninja-inc',
        paidAmount: 3000,
      }
    ],
    scrooges: [],
    transferAmounts: [],
  },
  loaded: false,
  loading: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_START:
      return {
        ...state,
        loading: true
      };
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        item: action.body.item
      };
    case GET_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.err
      };
    default:
      return state;
  }
}

export function get(item) {
  return {
    type: GET_SUCCESS,
    body: {
      item
    }
  };
}
