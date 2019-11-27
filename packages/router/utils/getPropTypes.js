
export default function getPropTypes(Component, propType){
  return Component.propTypes && Component.propTypes[propType];
}