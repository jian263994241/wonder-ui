import React from 'react';
import styled from 'styled-components';
import _Button from '../Button';
import { useRouterContext } from '@wonder-ui/router';

const Button = styled(_Button) `
  width: 40
`

const BackButton = (props)=>{
  const router = useRouterContext();

  return (
    <Button 
      onClick={router.history.goBack}
      variant="text" 
      color="primary"
      full
    > 返回 </Button>
  )
}


export default BackButton;