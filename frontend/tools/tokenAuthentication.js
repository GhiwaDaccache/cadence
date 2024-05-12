import * as Keychain from 'react-native-keychain';


export const saveTokenToKeychain = async (token) => { 
    try {
        await Keychain.setGenericPassword('token', token);
        console.log('Token saved successfully!');
      } catch (error) {
        console.error('Error saving token:', error);
      }

    return;
};
  
  export const getTokenFromKeychain = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        const token = credentials.password;
        console.log('Token retrieved:', token);
        return token;
      } else {
        console.log('No token found');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };