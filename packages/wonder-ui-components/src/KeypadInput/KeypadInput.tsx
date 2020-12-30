import * as React from 'react';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';
import { styles } from './styles';

export interface KeyboardInputProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  visible?: boolean;
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
}

function KeyboardInput(props: KeyboardInputProps): JSX.Element {
  const { value = '', visible, classes = {}, ...rest } = props;

  const arrFill = Array(6);

  return (
    <div className={classes?.root} {...rest}>
      <div className={classes?.body}>
        {[...arrFill].map((item, index) => {
          const val = value[index] || item;
          const dot = value.length > index ? '•' : '';

          return (
            <div className={classes?.boxItem} key={index}>
              {visible ? val : dot}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withStyles(styles)(KeyboardInput);
