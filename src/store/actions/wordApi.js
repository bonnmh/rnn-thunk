import * as TYPE from "./type";

import axios from "axios";
import axiosRetry from "axios-retry";

export function fetchingWordAll() {
  return dispatch => {
    dispatch({ type: TYPE.WORDS_LOADING });

    
    const client = axios.create({ baseURL: TYPE.URL_WORDS });
    axiosRetry(client, { retries: 3 });
    client
      .get("")
      .then(function(response) {
        dispatch(fetchingWordSuccess(response.data));
      })
      .catch(function(e) {
        dispatch(fetchingWordFailed(e));
      });
  };
}
export function fetchingWordSuccess(data) {
  return {
    type: TYPE.WORDS_SUCCESS,
    data
  };
}
export function fetchingWordFailed(e) {
  return {
    type: TYPE.WORDS_FAILED,
    e
  };
}
