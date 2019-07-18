

export default (componentClass)=>{
  const defaultStyled = componentClass.constructor.styledComponents;
  return Object.assign({}, defaultStyled, componentClass.props.styledComponents);
}