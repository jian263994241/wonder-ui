import * as React from 'react';

export interface PreloaderProps {
  visible?: boolean;
  indicator?: React.ReactElement;
  navbarHeight?: number;
}

declare function Preloader(props: PreloaderProps): JSX.Element;

declare namespace Preloader {
  export function show(): void;
  export function hide(): void;
}
