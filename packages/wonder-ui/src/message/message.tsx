import * as ReactDOM from 'react-dom';
import { Dialogs, withDialog } from './withDialog';
import { getDefaultTheme } from '../styles/defaultTheme';
import { getDocument } from '@wonder-ui/utils';
import { Theme } from '../styles/createTheme';
import { ThemeProvider } from '@wonder-ui/styled';
import { useCreation } from '@wonder-ui/hooks';

type SetupOpts = {
  theme: Theme;
};

interface MessageType extends Dialogs {
  setup(options?: SetupOpts): void;
}

const message = {} as MessageType;

message.setup = (options) => {
  ReactDOM.render(
    <ThemeProvider theme={options?.theme || getDefaultTheme()}>
      <GlogalDialog />
    </ThemeProvider>,
    container
  );
};

const container = getDocument().createElement('div');

const GlogalDialog = withDialog((props) => {
  return useCreation(() => {
    Object.assign(message, props.dialog);
    return null;
  }, []);
});

message.setup();

export default message;
