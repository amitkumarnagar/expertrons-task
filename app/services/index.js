import { getStorageData, setStorageData } from '../utils/storage';

const loadTask = async () => {
  let tasks = (await getStorageData('@users')) || [];
  console.info('[Task loaded:]', tasks);
  return tasks;
};

const createTask = async ({ userName, tasks }) => {
  let existingUser = (await getStorageData('@users')) || [];
  const newTask = { title: userName, data: tasks };
  const userExistsIndex = existingUser.findIndex(i => i.title === userName);
  if (userExistsIndex > -1) {
    existingUser[userExistsIndex].data = [
      ...existingUser[userExistsIndex]?.data,
      ...tasks
    ];
  } else {
    existingUser = [...existingUser, newTask];
  }
  await setStorageData('@users', existingUser);
  console.info('[Task created:]', existingUser);
  return existingUser;
};

const editTask = async ({ index, userName, tasks }) => {
  let existingUser = (await getStorageData('@users')) || [];
  const updatedTask = { title: userName, data: tasks };
  existingUser[index] = updatedTask;
  await setStorageData('@users', existingUser);
  console.info('[Task edited:]', { userName: tasks });
  return existingUser;
};

const deleteTask = async ({ index }) => {
  let existingUser = (await getStorageData('@users')) || [];
  existingUser.splice(index, 1);
  await setStorageData('@users', existingUser);
  console.info('[Task deleted from:]', index);
  return existingUser;
};

export default {
  loadTask,
  createTask,
  editTask,
  deleteTask
};
