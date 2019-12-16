/**
 * merge multi classnames
 */
export default function classnames() {
  const classes = Array.prototype.slice.apply(arguments);
  return classes.filter(Boolean).join(' ');
}