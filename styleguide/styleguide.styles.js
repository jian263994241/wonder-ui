
const card = {
  marginBottom: 24,
  padding: 24,
  backgroundColor: '#fff',
  borderRadius: 6,
  boxShadow: '0 8px 12px #ebedf0'
};

const theme = exports.theme = {
  color: {
    codeComment: '#6d6d6d',
    codePunctuation: '#999',
    codeProperty: '#905',
    codeDeleted: '#905',
    codeString: '#690',
    codeInserted: '#690',
    codeOperator: '#9a6e3a',
    codeKeyword: '#1673b1',
    codeFunction: '#DD4A68',
    codeVariable: '#e90',
    codeBackground: '#fff',
    border: '#fff',
    base: '#333',
  },
  fontFamily: {
    base: `PingFang SC, 'Helvetica Neue', Arial, sans-serif`,
  },
  fontSize: {
    base: 14,
  }
};

exports.styles = {
  ReactComponent: {
    docs: {
      ...card
    }
  },
  ExamplePlaceholder: {
    button: {
      display: 'none'
    },
  },
  Para: {
    para: {
      marginTop: 0,
      marginBottom: 0,
      color: theme.color.base,
      fontFamily: theme.fontFamily.base,
      fontSize: 'inherit',
      lineHeight: 1.5,
    }
  },
  SectionHeading: {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    }
  },
  TableOfContents: {
    search: {
      display: 'none'
    }
  },
  ComponentsList: {
    list: {
      paddingLeft: 10,
      margin: 0
    },
    item: {
      color: theme.color.base,
      display: 'block',
      margin: 0,
      padding: '5px 0',
      fontFamily: theme.fontFamily.base,
      fontSize: theme.fontSize.base,
      listStyle: 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    isSelected: {

    }
  }
}

