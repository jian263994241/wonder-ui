import createUseStorageState from './utils/createUseStorageState';

const useLocalStorageState = createUseStorageState(
  typeof window === 'object' ? window.localStorage : null
);

export { useLocalStorageState };
export default useLocalStorageState;
