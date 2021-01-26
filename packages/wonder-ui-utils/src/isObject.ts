export default function isObject(o: any) {
  return (
    typeof o === 'object' &&
    o !== null &&
    o.constructor &&
    o.constructor === Object
  );
}
