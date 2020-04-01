

export default function createShape(cover) {
  return {
    borderRadius: 4,
    barHeight: 46,
    listItemHeight: 46,
    ...cover
  };
};