export default function createShape(cover?: object) {
  return {
    barHeight: 46,
    listItemHeight: 46,
    ...cover
  };
}
