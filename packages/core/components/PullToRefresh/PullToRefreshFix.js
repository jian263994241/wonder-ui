import RmcPullToRefresh from 'rmc-pull-to-refresh/lib/PullToRefresh';

const DOWN = 'down';
const UP = 'up';

export default class PullToRefreshFix extends RmcPullToRefresh {
  constructor(props) {
    super(props);
  }

  isEdge = (ele, direction) => {
    // To fix edge when using react-window 
    const scrollDirection = this.props['data-scroll-direction'];
    if(scrollDirection){
      if(direction === DOWN){
        return scrollDirection.scrollOffset === 0
      }
    }
    // Origin way
    const container = this.props.getScrollContainer();
    if (container && container === document.body) {
      // In chrome61 `document.body.scrollTop` is invalid
      const scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
      if (direction === UP) {
        return scrollNode.scrollHeight - scrollNode.scrollTop <= window.innerHeight;
      }
      if (direction === DOWN) {
        return scrollNode.scrollTop <= 0;
      }
    }
    if (direction === UP) {
      return ele.scrollHeight - ele.scrollTop === ele.clientHeight;
    }
    if (direction === DOWN) {
      return ele.scrollTop <= 0;
    }
    // 补全 branch, test 才过的了，但是实际上代码永远不会走到这里，这里为了保证代码的一致性，返回 undefined
    return undefined;
  }
}
