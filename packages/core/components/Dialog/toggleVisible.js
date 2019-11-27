export default function toggleVisible (fn){
  let visible = true;
  return function toggle(...arg){
    if(fn){
      fn(visible, ...arg);
      visible = false;
    }
  }
}