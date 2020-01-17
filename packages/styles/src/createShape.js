

export default function createShape(cover) {
  return {
    borderRadius: 4,
    barHeight: 44,
    ...cover
  };
};