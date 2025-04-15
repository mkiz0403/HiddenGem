import EncryptedStorage from 'react-native-encrypted-storage';

const setEncryptedStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

const getEncryptedStorage = async <T>(key: string) => {
  const storageData = await EncryptedStorage.getItem(key);

  return storageData ? (JSON.parse(storageData) as T) : null;
};

const removeEncryptedStorage = async (key: string) => {
  const data = await getEncryptedStorage(key);

  if (data) {
    await EncryptedStorage.removeItem(key);
  }
};

export {setEncryptedStorage, getEncryptedStorage, removeEncryptedStorage};
