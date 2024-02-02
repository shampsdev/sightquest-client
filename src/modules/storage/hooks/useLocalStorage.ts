import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = () => {
  const storeData = async <T>(key: string, value: T) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async <T>(key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
    } catch (e) {
      // error reading value
    }
  };

  const clear = async () => {
    await AsyncStorage.clear();
  };

  return {
    storeData,
    getData,
    clear,
  };
};
