import * as TYPE from "../actions/type";

const initalState = {
  loading: false,
  e: null,
  data: []
};
const wordApiReducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPE.WORDS_LOADING:
      return {
        ...state,
        loading: true,
        e: null,
        data: []
      };
    case TYPE.WORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        e: null,
        data: action.data
      };
    case TYPE.WORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        e: action.e,
        data: []
      };
    default:
      return state;
  }
};
export default wordApiReducer;
