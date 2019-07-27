import React, {Component} from 'react';
import { Page, Button } from '@wonder-ui/core';

export default class ButtonsDemo extends Component {

  render (){
    console.log('button render');
    
    return (
      <Page>

        <Button variant="outlined" color="default">按钮</Button>
        <Button variant="outlined" color="primary">按钮</Button>
        <Button variant="outlined" color="secondary">按钮</Button>

        <Button variant="contained" color="default">按钮</Button>
        <Button variant="contained" color="primary">按钮</Button>
        <Button variant="contained" color="secondary">按钮</Button>
        
        <Button variant="text" color="default">按钮</Button>
        <Button variant="text" color="primary">按钮</Button>
        <Button variant="text" color="secondary">按钮</Button>

        <Button variant="contained" color="primary" size="small">small</Button>
 
        <Button variant="contained" color="primary" size="medium">medium</Button>
       
        <Button variant="contained" color="primary" size="large">large</Button>


        <Button variant="contained" color="primary" size="large" fullWidth>fullWidth large button</Button>

      </Page>
    )
  }
}
