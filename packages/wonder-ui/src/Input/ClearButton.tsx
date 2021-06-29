import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import SvgIcon from '../SvgIcon';
import useTheme from '../styles/useTheme';

export default function (props: ButtonBaseProps) {
  const theme = useTheme();
  return (
    <ButtonBase {...props}>
      <SvgIcon viewBox="0 0 28 28" fontSize="inherit">
        <circle cx="14" cy="14" r="14" fill={theme.palette.light.main} />
        <path
          stroke={theme.palette.light.contrastText}
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M8 8l12 12"
        />
        <path
          fill="none"
          stroke={theme.palette.light.contrastText}
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M20 8L8 20"
        />
      </SvgIcon>
    </ButtonBase>
  );
}
