import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input } from '../components';

const AddTask = ({ tasks, onChangeTask, onAddMoreTask, onRemoveTask }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <View style={styles.inputContainer} key={index}>
          <Input
            label="Add Task"
            placeholder="Add task"
            value={task}
            onChangeText={text => onChangeTask(text, index)}
          />
          {index > 0 && (
            <Icon
              name="remove-circle-outline"
              size={25}
              color="red"
              style={styles.removeIcon}
              onPress={() => onRemoveTask(index)}
            />
          )}
        </View>
      ))}
      <TouchableOpacity style={styles.addBtn} onPress={onAddMoreTask}>
        <Icon name="add-circle-outline" size={20} />
        <Text>Add More Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  removeIcon: {
    marginTop: 10
  }
});

export default AddTask;
