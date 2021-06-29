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

export function checkFlexGap() {
  // create flex container with row-gap set
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  //@ts-expect-error
  flex.parentNode.removeChild(flex);

  return isSupported;
}
