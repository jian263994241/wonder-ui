/** Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff';
const rsComboMarksRange = '\\u0300-\\u036f';
const reComboHalfMarksRange = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange = '\\u20d0-\\u20ff';
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff';
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff';
const rsComboRange =
  rsComboMarksRange +
  reComboHalfMarksRange +
  rsComboSymbolsRange +
  rsComboMarksExtendedRange +
  rsComboMarksSupplementRange;
const rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
const rsAstral = `[${rsAstralRange}]`;
const rsCombo = `[${rsComboRange}]`;
const rsFitz = '\\ud83c[\\udffb-\\udfff]';
const rsModifier = `(?:${rsCombo}|${rsFitz})`;
const rsNonAstral = `[^${rsAstralRange}]`;
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
const reHasUnicode = RegExp(
  `[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`
);

/** Used to compose unicode regexes. */
const reOptMod = `${rsModifier}?`;
const rsOptVar = `[${rsVarRange}]?`;
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join(
  '|'
)})${rsOptVar + reOptMod})*`;
const rsSeq = rsOptVar + reOptMod + rsOptJoin;
const rsNonAstralCombo = `${rsNonAstral}${rsCombo}?`;
const rsSymbol = `(?:${[
  rsNonAstralCombo,
  rsCombo,
  rsRegional,
  rsSurrPair,
  rsAstral
].join('|')})`;

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
export function hasUnicode(string: string) {
  return reHasUnicode.test(string);
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
export function asciiToArray(string: string) {
  return string.split('');
}

const reUnicode = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol + rsSeq}`, 'g');
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
export function unicodeToArray(string: string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
export function stringToArray(string: string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
export function castSlice(array: any[], start: number, end?: number) {
  const { length } = array;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : array.slice(start, end);
}

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
export function createCaseFirst(methodName: string) {
  return (string: string) => {
    if (!string) {
      return '';
    }

    const strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;

    const chr: any = strSymbols ? strSymbols[0] : string[0];

    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = createCaseFirst('toUpperCase');

export default upperFirst;
