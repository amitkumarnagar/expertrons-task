import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) return JSON.parse(data);
    return '';
  } catch (e) {
    return '';
  }
};

export const setStorageData = async (key, value) => {
  try {
    if (value) return await AsyncStorage.setItem(key, JSON.stringify(value));
    return '';
  } catch (e) {
    return '';
  }
};
