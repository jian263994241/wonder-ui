
import React, {Component} from 'react'
import {render} from 'react-dom'



import {SwipeableViews} from '../src/js/kui'

const {virtualize, autoPlay, Pagination} = SwipeableViews;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};


class App extends Component{
  state = {
    index: 0,
  };
  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const {
      index,
    } = this.state;

    return (
      <div className="framework7-root">
        <div style={styles.root}>
          <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°3
            </div>
          </AutoPlaySwipeableViews>
          <Pagination
            dots={3}
            index={index}
            onChangeIndex={this.handleChangeIndex}
          />
        </div>
      </div>
    );
  }
}



render(<App/>, document.querySelector('.root'))
