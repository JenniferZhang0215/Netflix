import { combineReducers } from "redux";

const defaultState = {
  mylist: [],
  recommendations: []
};

const movieList = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return action.payload;
    case "ADD":
      let recommendations = [...state.recommendations];
      let mylist = [
        ...state.mylist,
        ...recommendations.splice(action.payload, 1)
      ];
      return { mylist, recommendations };
    case "REMOVE":
      mylist = [...state.mylist];
      recommendations = [
        ...state.recommendations,
        ...mylist.splice(action.payload, 1)
      ];
      return { mylist, recommendations };
    default:
      return state;
  }
};

export default combineReducers({ movieList });
