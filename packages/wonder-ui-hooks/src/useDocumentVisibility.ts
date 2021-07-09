import { useEventListener } from './useEventListener';
import { getDocument } from '@wonder-ui/utils';
import { useSafeState } from './useSafeState';

type VisibilityState = 'hidden' | 'visible' | 'prerender' | undefined;

const getVisibility = () => getDocument().visibilityState;

export function useDocumentVisibility(): VisibilityState {
  const [documentVisibility, setDocumentVisibility] = useSafeState(() =>
    getVisibility()
  );

  useEventListener(getDocument(), 'visibilitychange', () => {
    setDocumentVisibility(getVisibility());
  });

  return documentVisibility;
}
