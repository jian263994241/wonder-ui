import { createUseStorageState } from './utils/createUseStorageState';

export const useSessionStorageState = createUseStorageState(
  typeof window === 'object' ? window.sessionStorage : null
);

export default useSessionStorageState;
