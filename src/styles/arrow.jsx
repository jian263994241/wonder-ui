import svg from './svg';

export const xmlString = ()=> `
<svg viewBox="0 0 60 120" xmlns="http://www.w3.org/2000/svg"><path d="m60 61.5-38.25 38.25-9.75-9.75 29.25-28.5-29.25-28.5 9.75-9.75z" fill="#c7c7cc"/></svg>
`
export default svg(xmlString())
