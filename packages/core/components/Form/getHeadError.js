import isArray from 'lodash/isArray';
import objValues from 'lodash/values';

const getDefinedError = (errorArray)=>{
  let error; 
  for(let i = 0; i< errorArray.length; i++){
    if(errorArray[i]){
      error = errorArray[i];
      break;
    }
  }
  return error;
}

export const flatError = (error)=>{
  if(isArray(error)){
    error = getDefinedError(error);
  }
  
  if(error){
    if(error.errors){
      return flatError(error.errors);
    }else if(!error.field){  
      return flatError(objValues(error));
    }
  }

  return error;
}

export default flatError;