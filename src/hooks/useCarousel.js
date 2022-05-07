import { useReducer, useEffect } from "react";
import api from "../lib/Api";

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
  loading: true,
  items: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

function fetchRequest() {
  return { type: FETCH_REQUEST };
}

function fetchSuccess(results) {
  return { type: FETCH_SUCCESS, payload: results };
}

function fetchError(error) {
  return { type: FETCH_ERROR, payload: error };
}

export default function useCarousel(category) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(fetchRequest());
    api.load(category).then((data) => {
      if ("error" in data) {
        dispatch(fetchError(data.error));
      } else {
        dispatch(fetchSuccess(data.results));
      }
    });
  }, [category]);

  return state;
}
