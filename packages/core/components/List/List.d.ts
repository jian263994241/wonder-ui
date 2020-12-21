export interface ListProps {
  renderFooter?: () => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  children?: any;
}

export default function List(params: ListProps): JSX.Element;
