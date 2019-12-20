import React from 'react';
import Button from '../Button';
import { useRouterContext } from '@wonder-ui/router';

const BackButton = React.forwardRef(function BackButton() {
  const router = useRouterContext();

  return (
    <Button 
      back
      variant="text" 
      color="primary"
    > 返回 </Button>
  )
});


export default BackButton;