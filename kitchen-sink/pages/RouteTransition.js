import React from 'react';
import { 
  CheckableGroup, 
  CheckboxItem, 
  createTheme, 
  List, 
  ListItem, 
  Page, 
  Switch, 
  useTheme,
} from '@wonder-ui/core';

const colors = [
  {label: 'slide', value: 'slide'},
  {label: 'fade', value: 'fade'},
  {label: 'scale', value: 'scale'},
]

export default function ThemeExamples(props) {

  const setTransitionType = window.setTransitionType;
  const [current, setCurrent] = React.useState(window._animation);
  
  
  
  const handleChange= (value)=>{
    setTransitionType(value);
    setCurrent(value);
  }

  return (
    <Page name="Theme" navbar >
      <List renderHeader={()=>`过渡`}>
        <CheckableGroup 
          exclusive
          value={current}
          data={colors}
          onChange={handleChange}
          renderItem={({label, ...props})=>(
            <CheckboxItem visible {...props}>{label}</CheckboxItem>
          )}
        />
      </List>
    </Page>
  )
}