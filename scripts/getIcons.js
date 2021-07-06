const fs = require('fs');
const path = require('path');
const HTMLParser = require('node-html-parser');
const prettier = require('prettier');

const prettierrc = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../.prettierrc')),
);

const iconsSymbols = fs.readFileSync(
  path.join(__dirname, './bootstrap-icons.svg'),
  'utf-8',
);

const targetDir = path.join(__dirname, '../packages/wonder-ui-icons/src');

const root = HTMLParser.parse(iconsSymbols);

const symbolTags = root.querySelectorAll('symbol');

createIconFiles(symbolTags);
createIndexFile(symbolTags);

function createIndexFile(symbolTags) {
  const filename = path.join(targetDir, 'index.tsx');

  let output = '';

  symbolTags.forEach((symbolTag) => {
    const name = nameCase(symbolTag.id);

    output += `export { default as ${name} } from './${name}';`;
  });
  output = prettier.format(output, prettierrc);

  fs.writeFileSync(filename, output);
}

function createIconFiles(symbolTag) {
  if (Array.isArray(symbolTag)) {
    const symbolTags = symbolTag;
    symbolTags.forEach((symbolTag) => {
      createIconFiles(symbolTag);
    });
  } else {
    const name = nameCase(symbolTag.id);
    const filename = path.join(targetDir, name + '.tsx');

    let output = `
      import create from './_createSvgIcon';

      export default create(
        ${getChildrenString(symbolTag.childNodes)}
      ,
      '${name}')
    `;

    output = prettier.format(output, prettierrc);

    // const isExist = fs.existsSync(filename);

    // if (isExist) {
    //   fs.writeFileSync(filename, output);
    // }

    fs.writeFileSync(filename, output);
  }
}

function nameCase(nameInput) {
  return nameInput
    .split('-')
    .map((str) => str.replace(/(\w{1})/, (a) => a.toLocaleUpperCase()))
    .join('');
}

function nameCaseProps(pathNodeString) {
  return pathNodeString.replace(/\s+([A-Za-z]+-[A-Za-z]+)\s{0,}=/g, (str) => {
    return str
      .split('-')
      .map((str, index) => {
        if (index != 0) {
          return str.replace(/(\w{1})/, (a) => a.toLocaleUpperCase());
        } else {
          return str;
        }
      })
      .join('');
  });
}

function getChildrenString(childNodes) {
  let wrapLeft = '',
    wrapRight = '';
  if (childNodes.length > 1) {
    wrapLeft = '<>';
    wrapRight = '</>';
  }
  return (
    wrapLeft +
    childNodes.map((child) => nameCaseProps(child.toString())).join('') +
    wrapRight
  );
}
