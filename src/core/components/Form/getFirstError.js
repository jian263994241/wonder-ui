
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
  if(Array.isArray(error)){
    error = getDefinedError(error);
  }
  
  if(error){
    if(error.errors){
      return flatError(error.errors);
    }else if(!error.field){  
      return flatError(Object.values(error));
    }
  }

  return error;
}

const getFirstError = (errors)=>{
  let firstError;
  for(let k in errors){
    if(!firstError){
      firstError = errors[k];
      break;
    }
  }
  return flatError(firstError).message;
}



export default getFirstError;