export const create = (svgString) =>
  `url(data:image/svg+xml;utf8,${encodeURIComponent(svgString)})`;
