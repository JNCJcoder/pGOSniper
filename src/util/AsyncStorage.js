import AsyncStorage from '@react-native-community/async-storage';

export const GuardarItem = async (token, data) => {
  try {
    await AsyncStorage.setItem(token, data);
  } catch (e) {
    console.log(e);
  }
};

export const PegarItem = async (token) => {
  try {
    const value = await AsyncStorage.getItem(token);
    return value;
  } catch (e) {
    console.log(e);
  }
};
