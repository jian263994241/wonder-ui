import styled from 'styled-components';


export const Simulator = styled.div `
  width: 375px; 
  height: 667px;
  box-sizing: border-box;
  background: #eee;
  padding: 5px;
  border-radius: 5px;

  >.simulator {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background: #fafafa;
  }
`

export const CodeWrapper = styled.div `
  height: 605px;
  width: auto;
  min-width: 50%;
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 12px #ebedf0;
  overflow: auto;
`