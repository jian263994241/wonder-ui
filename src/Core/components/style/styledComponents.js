import Utils from '../../utils/utils';

export default (componentClass)=>{
  const defaultStyled = componentClass.constructor.styledComponents;
  return Utils.extend({}, defaultStyled, componentClass.props.styledComponents);
}