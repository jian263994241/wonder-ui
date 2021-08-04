import { SvgIcon, SvgIconProps, styled } from '@wonder-ui/core';

const IconStoreRoot = styled(SvgIcon)<SvgIconProps>(({ theme }) => ({
  color: theme.palette.colors.blue.A200
}));

export default () => (
  <IconStoreRoot fontSize="large" titleAccess="store" viewBox="0 0 24 24">
    <path d="M19 4a2 2 0 012 2v4a2 2 0 01-.999 1.732L20 19h1a1 1 0 010 2H3a1 1 0 010-2h1v-7.268A2 2 0 013 10V6a2 2 0 012-2h14zm-1 8H6v7h2.5v-4a1 1 0 011-1h5a1 1 0 011 1v4H18v-7zm-4.5 4h-3v3h3v-3zM19 6H5v4h14V6z" />
  </IconStoreRoot>
);
