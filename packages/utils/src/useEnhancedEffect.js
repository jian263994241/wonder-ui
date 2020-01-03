import React from 'react';

const useEnhancedEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

export default useEnhancedEffect;