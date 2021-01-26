import React from 'react';
import {
  CheckableGroup,
  CheckboxItem,
  List,
  ListItem,
  Page,
  Switch,
  Dialog,
  Button,
  useTheme,
  createTheme,
} from '@wonder-ui/core';

const colors = [
  { label: '4791db', value: '#4791db' },
  { label: 'ffb74d', value: '#ffb74d' },
  { label: '00C694', value: '#00C694' },
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
  const [currentColor, setCurrentColor] = React.useState(
    theme.palette.primary.main,
  );

  const changeDark = (checked) => {
    if (checked) {
      setTheme(darkTheme);
    } else {
      setTheme();
    }
    setDark(checked);
  };

  const handleChange = (value) => {
    setTheme(
      createTheme({
        palette: {
          type: dark ? 'dark' : 'light',
          primary: {
            main: value,
          },
        },
      }),
    );
    setCurrentColor(value);
  };

  return (
    <Page name="Theme" navbar>
      <List renderHeader={() => `Mod`}>
        <ListItem extra={<Switch checked={dark} onChange={changeDark} />}>
          深色模式
        </ListItem>
      </List>
      <List renderHeader={() => `颜色`}>
        <CheckableGroup
          exclusive
          value={currentColor}
          data={colors}
          onChange={handleChange}
          renderItem={({ label, ...props }) => (
            <CheckboxItem visible {...props}>
              {label}
            </CheckboxItem>
          )}
        />
      </List>

      <Button
        color="primary"
        onClick={() => {
          Dialog.alert({
            text: 'primary',
          });
        }}
      >
        样式按钮
      </Button>
    </Page>
  );
}
