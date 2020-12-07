import * as React from 'react';

export default function getDisplayName(
  Component: React.ComponentType<any> | string
): string {
  if (typeof Component != 'string') {
    return Component.displayName || Component.name;
  }
  return Component.length > 0 ? Component : 'Unknown';
}
