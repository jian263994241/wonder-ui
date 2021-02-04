export default (svgString: string) =>
  `url(data:image/svg+xml;utf8,${encodeURIComponent(svgString)})`;
