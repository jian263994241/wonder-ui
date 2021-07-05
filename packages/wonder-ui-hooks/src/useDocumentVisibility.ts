import { useState } from 'react';
import { useEventListener } from './useEventListener';
import { getDocument } from '@wonder-ui/utils';

type VisibilityState = 'hidden' | 'visible' | 'prerender' | undefined;

const getVisibility = () => getDocument().visibilityState;

export function useDocumentVisibility(): VisibilityState {
  const [documentVisibility, setDocumentVisibility] = useState(() =>
    getVisibility()
  );

  useEventListener(getDocument(), 'visibilitychange', () => {
    setDocumentVisibility(getVisibility());
  });

  return documentVisibility;
}
