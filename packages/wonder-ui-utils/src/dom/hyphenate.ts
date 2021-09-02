const rUpper = /([A-Z])/g;

export function hyphenate(string: string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
