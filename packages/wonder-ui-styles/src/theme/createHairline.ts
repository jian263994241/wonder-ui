import type { CSSProperties } from '../types';
import createPalette from './createPalette';

type Position = 'top' | 'bottom' | 'left' | 'right';

const pixelRatio = 3;

function create(
  position: Position,
  color = '#999',
  coverStyles?: CSSProperties
) {
  let styles;
  const base = {
    content: '""',
    position: 'absolute',
    backgroundColor: color,
    display: 'block',
    zIndex: 15
  };

  const scaleY = {
    transform: `scaleY(${1 / pixelRatio})`
  };

  const scaleX = {
    transform: `scaleX(${1 / pixelRatio})`
  };

  switch (position) {
    case 'top':
      styles = {
        '&:before': {
          ...base,
          ...scaleY,
          left: 0,
          top: 0,
          bottom: 'auto',
          right: 'auto',
          height: 1,
          width: '100%',
          transformOrigin: '50% 0%',
          ...coverStyles
        }
      };
      break;
    case 'left':
      styles = {
        '&:before': {
          ...base,
          ...scaleX,
          left: 0,
          top: 0,
          bottom: 'auto',
          right: 'auto',
          width: 1,
          height: '100%',
          transformOrigin: '100% 50%',
          ...coverStyles
        }
      };
      break;
    case 'bottom':
      styles = {
        '&:after': {
          ...base,
          ...scaleY,
          left: 0,
          bottom: 0,
          right: 'auto',
          top: 'auto',
          height: 1,
          width: '100%',
          transformOrigin: '50% 100%',
          ...coverStyles
        }
      };
      break;
    case 'right':
      styles = {
        '&:after': {
          ...base,
          ...scaleX,
          right: 0,
          top: 0,
          left: 'auto',
          bottom: 'auto',
          width: 1,
          height: '100%',
          transformOrigin: '0% 50%',
          ...coverStyles
        }
      };
      break;
  }

  return styles;
}

function remove(position: Position) {
  let result = {};
  switch (position) {
    case 'left':
    case 'top':
      result = {
        '&:before': {
          display: 'none'
        }
      };
      break;
    case 'right':
    case 'bottom':
      result = {
        '&:after': {
          display: 'none'
        }
      };
      break;
  }
  return result;
}

export default function createHairline(
  palette: ReturnType<typeof createPalette>
) {
  return {
    create: (position: Position, coverStyles?: CSSProperties) =>
      create(position, palette.divider, coverStyles),
    remove
  };
}
