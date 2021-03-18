import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../types';
import Services from '../../services';

function* loadTask(action) {
  try {
    const tasks = yield call(Services.loadTask);
    yield put({ type: ActionTypes.LOAD_TASK_SUCCESS, payload: tasks });
  } catch (e) {
    console.log('failed ', e);
    yield put({ type: ActionTypes.LOAD_TASK_FAILED, message: e.message });
  }
}

function* createTask(action) {
  try {
    const user = yield call(Services.createTask, action.payload);
    yield put({ type: ActionTypes.CREATE_TASK_SUCCESS, payload: user });
  } catch (e) {
    console.log('failed ', e);
    yield put({ type: ActionTypes.CREATE_TASK_FAILED, message: e.message });
  }
}

function* editTask(action) {
  try {
    const user = yield call(Services.editTask, action.payload);
    yield put({ type: ActionTypes.EDIT_TASK_SUCCESS, payload: user });
  } catch (e) {
    console.log('failed ', e);
    yield put({ type: ActionTypes.EDIT_TASK_FAILED, message: e.message });
  }
}

function* deleteTask(action) {
  try {
    const user = yield call(Services.deleteTask, action.payload);
    yield put({ type: ActionTypes.DELETE_TASK_SUCCESS, payload: user });
  } catch (e) {
    console.log('failed ', e);
    yield put({ type: ActionTypes.DELETE_TASK_FAILED, message: e.message });
  }
}

function* rootSaga() {
  yield takeLatest(ActionTypes.LOAD_TASK_REQUEST, loadTask);
  yield takeLatest(ActionTypes.CREATE_TASK_REQUEST, createTask);
  yield takeLatest(ActionTypes.EDIT_TASK_REQUEST, editTask);
  yield takeLatest(ActionTypes.DELETE_TASK_REQUEST, deleteTask);
}

export default rootSaga;
