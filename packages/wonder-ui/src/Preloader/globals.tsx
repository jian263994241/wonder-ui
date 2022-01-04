import Preloader from './Preloader';
import ReactDOM from 'react-dom';
import { PreloaderProps } from './PreloaderTypes';

const container = document.createElement('div');

let count = 0;

export const showPreloader = (props: PreloaderProps = {}) => {
  ++count;
  if (count <= 1) {
    ReactDOM.render(<Preloader visible {...props} />, container);
  }
};

export const hidePreloader = (options: { hideAll?: boolean } = {}) => {
  if (options.hideAll) {
    count = 0;
  }

  if (count > 0) {
    --count;
  }
  if (count <= 0) {
    ReactDOM.render(<Preloader visible={false} />, container);
  }
};
