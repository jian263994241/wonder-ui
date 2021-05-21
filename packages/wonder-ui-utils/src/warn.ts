/* eslint-disable no-console */

let _warningCallback: ((message: string) => void) | undefined = undefined;

export type ISettingsMap<T> = { [P in keyof T]?: string };
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
export function warn(message: string): void {
  if (_warningCallback && process.env.NODE_ENV !== 'production') {
    _warningCallback(message);
  } else if (console && console.warn) {
    console.warn(message);
  }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
export function setWarningCallback(
  warningCallback?: (message: string) => void
): void {
  _warningCallback = warningCallback;
}
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
export function warnConditionallyRequiredProps<P>(
  componentName: string,
  props: P,
  requiredProps: string[],
  conditionalPropName: string,
  condition: boolean
): void {
  if (condition === true && process.env.NODE_ENV !== 'production') {
    for (const requiredPropName of requiredProps) {
      if (!(requiredPropName in props)) {
        warn(
          `${componentName} property '${requiredPropName}' is required when '${conditionalPropName}' is used.'`
        );
      }
    }
  }
}
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
export function warnDeprecations<P>(
  componentName: string,
  props: P,
  deprecationMap: ISettingsMap<P>
): void {
  if (process.env.NODE_ENV !== 'production') {
    for (const propName in deprecationMap) {
      if (props && propName in props) {
        let deprecationMessage = `${componentName} property '${propName}' was used but has been deprecated.`;
        const replacementPropName = deprecationMap[propName];
        if (replacementPropName) {
          deprecationMessage += ` Use '${replacementPropName}' instead.`;
        }
        warn(deprecationMessage);
      }
    }
  }
}
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
export function warnMutuallyExclusive<P>(
  componentName: string,
  props: P,
  exclusiveMap: ISettingsMap<P>
): void {
  if (process.env.NODE_ENV !== 'production') {
    for (const propName in exclusiveMap) {
      if (props && props[propName] !== undefined) {
        let propInExclusiveMapValue = exclusiveMap[propName];
        if (
          propInExclusiveMapValue &&
          props[propInExclusiveMapValue as keyof P] !== undefined
        ) {
          warn(
            `${componentName} property '${propName}' is mutually exclusive with '${exclusiveMap[propName]}'. ` +
              `Use one or the other.`
          );
        }
      }
    }
  }
}
