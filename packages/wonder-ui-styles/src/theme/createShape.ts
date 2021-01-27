export default function createShape(cover?: object) {
  return {
    barHeight: 46,
    borderRadius: 4,
    buttonBorderRadius: 23,
    listItemHeight: 46,
    ...cover
  };
};
