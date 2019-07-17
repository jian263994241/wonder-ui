import styled, { withTheme } from 'styled-components';

export default function getStyledComponent(Component, render){
  if(render){
    return withTheme(render(styled(Component))) ;
  }
  return Component;
}