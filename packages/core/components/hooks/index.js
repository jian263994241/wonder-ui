import { usePageEffect } from '@wonder-ui/router';
import useForceUpdate from './useFroceUpdate';

const hooks = {
  usePageInit: usePageEffect,
  useForceUpdate,
};

export default hooks;
