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
  {label: '4791db', value: '#4791db'},
  {label: 'ffb74d', value: '#ffb74d'},
  {label: '4caf50', value: '#4caf50'},
];

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

export default function ThemeExamples(props) {
  const theme = useTheme();
  const setTheme = window.setTheme;
  const [dark, setDark] = React.useState(theme.palette.type === 'dark');
  const [currentColor, setCurrentColor] = React.useState(theme.palette.primary.main);
  
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
      <List renderHeader={()=>`Mod`}>
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