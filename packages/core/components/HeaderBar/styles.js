import createHairline from '../styles/createHairline';

export default {
  root: props => Object.assign({
    width: '100%',
    height: 44,
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    position: 'relative',
    boxSizing: 'border-box',
    paddingLeft: props => props.spacing,
    paddingRight: props => props.spacing,
  }, props.bordered && createHairline('bottom', '#ddd') ),
  common: {
    fontSize: 17,
    alignSelf: 'center',
    wordBreak: 'keep-all',
  },
  title: {
    extend: 'common',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    flex: 2,
  },
  left: {
    extend: 'common',
    textAlign: 'left',
    flex: 1,
  },
  right: {
    extend: 'common',
    textAlign: 'right',
    flex: 1,
  }
}

// export const HeaderBarRoot = styled('div') `
//   width: 100%;
//   height: 44px;
//   display: flex;
//   background-color: #fff;
//   justify-content: space-between;
//   position: relative;
//   padding: 0 ${props=> props.spacing}px;
//   ${borderBox}
//   ${props => props.bordered && createHairline('bottom', '#ddd').css}
// `

// const commonItemstyle = css `
//   font-size: 17px;
//   align-self: center;
  
// `

// export const HeaderBarTitle = styled('div') `
//   ${commonItemstyle}
//   ${textEllipsis}
//   text-align: center;
//   flex: 2;
// ` 

// export const HeaderBarLeft = styled('div') `
//   ${commonItemstyle}
//   word-break: keep-all;
//   text-align: left;
//   flex: 1;
// `

// export const HeaderBarRight = styled('div') `
//   ${commonItemstyle}
//   word-break: keep-all;
//   text-align: right;
//   flex: 1;
// `