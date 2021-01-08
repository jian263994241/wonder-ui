import { Location } from '../types';

export function useLocation(): Location;

export function useLocationExact(): Location;

export function usePageEffect(
  callback: () => (() => any) | void,
  vars: any[]
): void;

export function useNavigation(): {
  goBack: () => void;
  goForward: () => void;
  push: (loc: string | Partial<Location>, state?: any) => void;
  replace: (loc: string | Partial<Location>, state?: any) => void;
};
