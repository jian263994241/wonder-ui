export type SpacingConfig = number | ((factor: number) => number);

export interface Spacing {
  (p?: number): number;
  (p1: number, p2: number, p3?: number, p4?: number): string;
}

export default function createSpacing(space: SpacingConfig = 8): Spacing {
  const transform = (factor: number) => {
    if (typeof space === 'function') {
      return space(factor);
    }
    if (typeof space === 'number') {
      return space * factor;
    }
    return 0;
  };

  return (...args: any[]): any => {
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
}
