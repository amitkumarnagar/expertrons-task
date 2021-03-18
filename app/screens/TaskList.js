import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Item = ({ title, index }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{`${index + 1}. ${title}`}</Text>
  </View>
);

const TaskList = ({ list, onEdit, onDelete }) => {
  const onEditPress = title => {
    const index = list.findIndex(item => item.title === title);
    if (index > -1) onEdit(index);
  };

  const onDeletePress = title => {
    const index = list.findIndex(item => item.title === title);
    if (index > -1) onDelete(index);
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => <Item title={item} index={index} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headContainer}>
            <Text style={styles.header}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="trash-outline"
                size={25}
                onPress={() => onDeletePress(title)}
              />
              <Icon
                name="create-outline"
                size={25}
                onPress={() => onEditPress(title)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

TaskList.defaultProps = {
  list: [],
  onEdit: () => { },
  onDelete: () => { },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    width: '100%',
    padding: '10%'
    // marginHorizontal: 16x
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#bbb',
    marginTop: 10
  },
  item: {
    backgroundColor: '#dedede',
    borderBottomWidth: 0.5,
    padding: 5
  },
  header: {
    fontSize: 28,
    padding: 5,
  },
  title: {
    fontSize: 20
  }
});

export default TaskList;
