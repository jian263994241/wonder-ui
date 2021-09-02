import { useEventListener } from './useEventListener';
import { useSafeState } from './useSafeState';

type VisibilityState = 'hidden' | 'visible' | 'prerender' | undefined;

const getVisibility = () => document.visibilityState;

export function useDocumentVisibility(): VisibilityState {
  const [documentVisibility, setDocumentVisibility] = useSafeState(() =>
    getVisibility()
  );

  useEventListener(document, 'visibilitychange', () => {
    setDocumentVisibility(getVisibility());
  });

  return documentVisibility;
}
