import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import SvgIcon from '../SvgIcon';
import useTheme from '../styles/useTheme';
import { emphasize } from '../styles/colorManipulator';

export default function (props: ButtonBaseProps) {
  const theme = useTheme();
  const currentColor = emphasize(theme.palette.light.main, 0.3);
  const contrastText = theme.palette.light.main;
  return (
    <ButtonBase tabIndex={-1} disableRipple {...props}>
      <SvgIcon viewBox="0 0 28 28" fontSize="inherit">
        <circle cx="14" cy="14" r="14" fill={currentColor} />
        <path
          stroke={contrastText}
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M8 8l12 12"
        />
        <path
          fill="none"
          stroke={contrastText}
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M20 8L8 20"
        />
      </SvgIcon>
    </ButtonBase>
  );
}
