import * as ActionTypes from '../types';

const loadTask = () => ({
  type: ActionTypes.LOAD_TASK_REQUEST
});

const createTask = (userName, tasks) => ({
  type: ActionTypes.CREATE_TASK_REQUEST,
  payload: { userName, tasks }
});

const editTask = (index, userName, tasks) => ({
  type: ActionTypes.EDIT_TASK_REQUEST,
  payload: { index, userName, tasks }
});

const deleteTask = index => ({
  type: ActionTypes.DELETE_TASK_REQUEST,
  payload: { index }
});

export default {
  loadTask,
  createTask,
  editTask,
  deleteTask
};
