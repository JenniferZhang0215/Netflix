import axios from "axios";

export const addAction = index => {
  return {
    type: "ADD",
    payload: index
  };
};

export const removeAction = index => {
  return {
    type: "REMOVE",
    payload: index
  };
};

export const getAllMoviesAction = () => {
  return async dispatch => {
    const response = await axios.get("/movies.json");
    dispatch({ type: "GET_MOVIES", payload: response.data });
  };
};
