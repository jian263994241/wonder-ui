export default (theme) => ({
  root: {
    width: '100%',
    height: theme.shape.barHeight,
    flexShrink: 0,
  },
  safeAreaBottom: {
    paddingBottom: 'env(safe-area-inset-bottom)',
  },
});
