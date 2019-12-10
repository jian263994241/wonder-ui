export default function mergeClassName() {
  const classes = Array.prototype.slice.apply(arguments);
  return classes.filter(Boolean).join(' ');
}
