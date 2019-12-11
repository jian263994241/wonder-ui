/**
 * Promise timeout 
 * @param {func} callback 
 * @param {number} time 
 * @return {Promise} 
 */
export default function timeout(callback, time){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(callback());
    }, time);
  })
}