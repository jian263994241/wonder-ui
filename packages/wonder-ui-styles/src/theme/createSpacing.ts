export default function createSpacing(spacingInput: number = 8) {
  const transform =
    typeof spacingInput === 'function'
      ? (spacingInput as () => number)
      : (factor: number) => {
          return spacingInput * factor;
        };

  const spacing = (...args: number[]): string | number => {
    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args
      .map((factor) => {
        const output = transform(factor);
        return typeof output === 'number' ? `${output}px` : output;
      })
      .join(' ');
  };

  return spacing;
}
