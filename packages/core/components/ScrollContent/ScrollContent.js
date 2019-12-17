import Bouncefix from './Bouncefix';
import styled from 'styled-components';

const ScrollContent = styled(Bouncefix).withConfig({
  displayName: 'ScrollContent'
})({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  boxSizing: 'border-box',
  willChange: 'scroll-position',
  WebkitOverflowScrolling: 'touch',
});

export default ScrollContent;


