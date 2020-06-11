export default function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }

  // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
  // https://material.io/design/layout/understanding-layout.html#pixel-density
  let transform;

  if (typeof spacingInput === 'function') {
    transform = spacingInput;
  } else {
    transform = (factor) => {
      return spacingInput * factor;
    };
  }

  const spacing = (...args) => {
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

  spacing.mui = true;

  return spacing;
}
