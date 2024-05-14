import * as SecureStore from 'expo-secure-store';

export const save = async (key, value) => { 
    try {
        await SecureStore.setItemAsync(key, value);
      } catch (error) {
        console.error('Error saving token:', error);
      }
    return;
};
  
export const getValueFor = async (key) => {
    try {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        return result;
      } else {
        console.error('Error retrieving token:');
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
};

export const deleteToken = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error('Error deleting token:', error);
  }
};