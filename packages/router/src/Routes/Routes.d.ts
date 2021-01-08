import * as React from 'react';
import { PartialRouteObject, Location } from '../types';

export interface RoutesProps {
  routes: PartialRouteObject[];
  animation?: 'slide' | 'fade' | 'scale';
  animationDisabled?: boolean;
  noMatch?: React.ReactNode;
  onRouteChange?: (location: Location, action: string) => void;
}

export default function Routes(props: RoutesProps): JSX.Element;
