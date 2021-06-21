import { SpaceProps, SpaceSize } from './SpaceTypes';
import { Theme } from '../styles/createTheme';

function _getSizeValue(size: SpaceSize, theme: Theme) {
  const sizeConfig = {
    small: theme.spacing(0.5),
    medium: theme.spacing(1),
    large: theme.spacing(2)
  };

  return typeof size != 'number' ? sizeConfig[size] : size || 0;
}

export function getSize(size: SpaceProps['gap'], theme: Theme) {
  //@ts-expect-error
  if (!size || size === '') {
    return {
      rowGap: 0,
      columnGap: 0
    };
  }

  if (Array.isArray(size)) {
    return {
      rowGap: _getSizeValue(size[1], theme),
      columnGap: _getSizeValue(size[0], theme)
    };
  }

  return {
    rowGap: _getSizeValue(size, theme),
    columnGap: _getSizeValue(size, theme)
  };
}
