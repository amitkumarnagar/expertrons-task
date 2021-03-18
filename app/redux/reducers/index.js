import * as ActionTypes from '../types';

const initialState = [];

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOAD_TASK_SUCCESS:
    case ActionTypes.CREATE_TASK_SUCCESS:
    case ActionTypes.EDIT_TASK_SUCCESS:
    case ActionTypes.DELETE_TASK_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default rootReducer;
