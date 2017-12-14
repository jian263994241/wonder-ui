import svg from './svg';

export const xmlString = (width="18", height="18", color="#F46C70")=> `
<svg viewBox="0 0 1026 1024" xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <path d="M1014.041088 239.37024L410.448384 852.805632c-15.149056 15.394816-39.718912 15.394816-54.872064 0l-12.17536-12.374016-.049152.047104-13.164544-13.477888-56.920064-57.847808c-.366592-.376832-.48128-.89088-.833536-1.277952l-261.0688-267.259904c-15.153152-15.398912-15.153152-40.368128 0-55.76704l11.067392-12.406784c15.157248-15.403008 39.718912-15.403008 54.872064 0l306.01216 311.578624 564.7872-572.821504c15.149056-15.398912 39.716864-15.398912 54.86592 0l11.071488 12.406784c15.151104 15.40096 15.151104 40.370176 0 55.764992z" fill="${color}"/>
</svg>
`
export default svg(xmlString())
