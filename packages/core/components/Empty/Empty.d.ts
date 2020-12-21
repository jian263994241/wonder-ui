export interface EmptyProps {
  description?: string;
  image?: React.ComponentType<any>;
  imageStyle?: object;
  classes?: Record<'root' | 'description', string>;
}

export default function Empty(props: EmptyProps): JSX.Element;
