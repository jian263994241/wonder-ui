import * as React from 'react';
import { ButtonProps } from '../Button/Button';

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ButtonBase(props: ButtonProps): JSX.Element;
