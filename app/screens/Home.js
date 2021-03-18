import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '../components';
import AddTask from './AddTask';
import actions from '../redux/actions';
import TaskList from './TaskList';

const Home = () => {
  const [userName, setUserName] = React.useState('');
  const [tasks, setTasks] = React.useState(['']);
  const [isEditingIndex, setIsEditingIndex] = React.useState(-1);

  const dispatch = useDispatch();
  const taskList = useSelector(state => state) || [];

  React.useEffect(() => {
    dispatch(actions.loadTask());
  }, [dispatch]);

  const onChangeTask = (value, index) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = value;
      return updatedTasks;
    });
  };

  const onAddMoreTask = () => setTasks(prevTasks => [...prevTasks, '']);

  const onRemoveTask = index =>
    setTasks(prevTasks => [...prevTasks].filter((_, i) => i !== index));

  const onSave = () => {
    const cleanTasks = tasks.filter(x => x);
    if (isEditingIndex > -1) {
      dispatch(actions.editTask(isEditingIndex, userName, cleanTasks));
      setIsEditingIndex(-1);
    } else {
      dispatch(actions.createTask(userName, cleanTasks));
    }
    setUserName('');
    setTasks(['']);
  };

  const onEdit = index => {
    const itemToEdit = taskList[index];
    if (itemToEdit) {
      setUserName(itemToEdit.title);
      setTasks(itemToEdit.data);
      setIsEditingIndex(index);
    }
  };

  const onDelete = index => dispatch(actions.deleteTask(index));

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>User Task Management</Text>
      <View style={styles.card}>
        <Text style={styles.h2}>Add User</Text>
        <Input
          label="User Name"
          placeholder="Enter user name"
          value={userName}
          onChangeText={text => setUserName(text)}
        />
        <AddTask
          tasks={tasks}
          onChangeTask={onChangeTask}
          onAddMoreTask={onAddMoreTask}
          onRemoveTask={onRemoveTask}
        />
        <Button
          title="Save"
          style={styles.saveBtn}
          onPress={onSave}
          disabled={!(userName && tasks.length)}
        />
      </View>
      <TaskList list={taskList} onEdit={onEdit} onDelete={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 28,
    fontWeight: '700'
  },
  h2: {
    fontSize: 24,
    fontWeight: '600'
  },
  h3: {
    fontSize: 20,
    fontWeight: '500'
  },
  card: {
    padding: 10,
    margin: 10
  },
  saveBtn: {
    marginVertical: 10
  }
});

export default Home;
