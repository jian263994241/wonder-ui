import React from 'react';
import FormContext from './FormContext';

export default function useForm (form) {
  return React.useContext(FormContext);
}