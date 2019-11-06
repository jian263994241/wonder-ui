import styled from 'styled-components';

export const WUI_skeleton = styled.div `
  display: table;
  width: 100%;
`;

export const WUI_skeleton_header = styled.div `
  display: table-cell;
  padding-right: 16px;
  vertical-align: top;
`

export const WUI_skeleton_content = styled.div `
  display: table-cell;
  width: 100%;
  vertical-align: top;
`

export const WUI_skeleton_paragraph = styled.ul `
  padding: 0;
  > li {
    width: 100%;
    height: 16px;
    list-style: none;
    background: #f2f2f2;

    &:last-child:not(:first-child):not(:nth-child(2)) {
      width: 61%;
    }

    + li {
      margin-top: 16px;
    }
  }
`