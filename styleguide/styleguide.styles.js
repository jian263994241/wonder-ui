
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
  Table: {
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
      emptyCells: 'show',
      border: '1px solid #e9e9e9',
      width: '100%',
      marginBottom: 24,
      fontFamily: theme.fontFamily.base,
      fontSize: 13
    },
    cellHeading: {
      border: '1px solid #e9e9e9',
      padding: '8px 16px',
      textAlign: 'left',
      whiteSpace: 'nowrap',
      color: '#5c6b77',
      fontWeight: 600,
      background: '#f7f7f7'
    },
    cell: {
      border: '1px solid #e9e9e9',
      padding: '8px 16px',
      textAlign: 'left',
    },
  },
  Code: {
    code: {
      margin: '0 3px',
      padding: '1px 6px',
      borderRadius: 3,
      color: '#777',
      fontSize: 12.8,
      border: '1px solid #e9e9e9',
      background: '#f7f7f7',
      fontFamily: theme.fontFamily.base,
      display: 'inline-block',
      whiteSpace: 'nowrap',
      lineHeight: 1.4
    }
  },
  Name: {
    name: {
      display: 'inline-block'
    }
  }
}

