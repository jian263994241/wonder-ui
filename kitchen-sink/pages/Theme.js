import React from 'react';
import { Page, List, ListItem, createTheme, Switch, CheckableGroup, CheckboxItem, useTheme } from '@wonder-ui/core';


const darkTheme = createTheme({
  palette: {
    type: 'dark',
    // primary: {
    //   main: '#1DA57A'
    // },
    // secondary: {
    //   main: '#754CC6'
    // }
  },
});

const colors = [
  {label: '4791db', value: '#4791db'},
  {label: 'ffb74d', value: '#ffb74d'},
  {label: '4caf50', value: '#4caf50'},
]

export default function ThemeExamples(props) {
  const theme = useTheme();
  const setTheme = window.setTheme;
  const [dark, setDark] = React.useState(theme.palette.type === 'dark');
  const [currentColor, setCurrentColor] = React.useState();

  const changeDark = (checked)=>{
    if(checked){
      setTheme(darkTheme)
    }else{
      setTheme()
    }
    setDark(checked);
  };
  
  const handleChange= (value)=>{
    setTheme(
      createTheme({
        palette: {
          type: dark ? 'dark': 'light',
          primary: {
            main: value,
          },
        },
      })
    )
    setCurrentColor(value);
  }

  return (
    <Page name="Theme" navbar >
      <List>
        <ListItem extra={<Switch checked={dark} onChange={changeDark}/>}>深色模式</ListItem>
      </List>
      <List renderHeader={()=>`颜色`}>
        <CheckableGroup 
          exclusive
          value={currentColor}
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