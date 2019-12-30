import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './Preloader';

const container = document.createElement('div');

let count = 0;

Preloader.show = (indicator)=> {
  setTimeout(() => {
    ++ count;
    if(count <= 1){
      ReactDOM.render(<Preloader visible indicator={indicator}/>, container);
    }
  }, 0);
}

Preloader.hide = ()=> {
  setTimeout(()=>{
    if(count > 0){
       -- count;
    }
    if(count <= 0) {
      ReactDOM.render(<Preloader visible={false}/>, container);
    }
    
  },  0);
}

Preloader.hideAll = ()=> {
  count = 0;
  ReactDOM.render(<Preloader visible={false}/>, container);
}
