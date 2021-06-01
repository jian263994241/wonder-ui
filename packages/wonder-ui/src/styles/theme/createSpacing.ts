export type SpacingConfig = number | ((factor: number) => number);

export type Spacing = ((
  p1: number,
  p2: number,
  p3?: number,
  p4?: number
) => string) &
  ((p?: number) => number);

export default function createSpacing(
  spacingInput: SpacingConfig = 8
): Spacing {
  const transform =
    typeof spacingInput === 'function'
      ? (spacingInput as () => number)
      : (factor: number): number => {
          return spacingInput * factor;
        };

  function spacing(p?: number): number;
  function spacing(p1: number, p2: number, p3?: number, p4?: number): string;
  function spacing(...args: any[]): any {
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
  }

  return spacing;
}
