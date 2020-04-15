export default theme => {

  const commonPagination = {
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    display: 'block',
    width: 59,
    height: '100%',
    content: '',
    zIndex: 10,
  }

  return {
    main: {
      boxSizing: 'border-box',
      display: 'flex',
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      '&-content-wrap': {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
        minHeight: 0,
        '&-animated': {
          transition: theme.transitions.create(['transform', 'left', 'top']),
          willChange: 'transform, left, top'
        }
      },
      '&-pane-wrap': {
        width: '100%',
        flexShrink: 0,
        overflowY: 'auto',
      },
      '&-tab-bar-wrap': {
        flexShrink: 0,
      },
      '&-horizontal': {
        '$bar &-pane-wrap-active': {
          height: 'auto'
        },
        '$bar &-pane-wrap-inactive': {
          height: 0,
          overflow: 'visible',
        }
      },
      '&-vertical': {
        '$bar &-content-wrap': {
          flexDirection: 'column'
        },
        '$bar &-tab-bar-wrap': {
          height: '100%'
        },
        '$bar &-pane-wrap': {
          height: '100%'
        },
        '$bar &-pane-wrap-active': {
          overflow: 'auto'
        },
        '$bar &-pane-wrap-inactive': {
          overflow: 'hidden',
        }
      },
      '&-top, &-bottom': {
        flexDirection: 'column'
      },
      '&-left, &-right': {
        flexDirection: 'row'
      }
    },

    bar: {
      position: 'relative',
      display: 'flex',
      flexShrink: 0,
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      overflow: 'visible',
      zIndex: 1,
      '&-tab': {
        WebkitTapHighlightColor: 'transparent',
        position: 'relative',
        display: 'flex',
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14,
        height: 44,
        lineHeight: 44,
      },
      '&-tab-active': {
        color: theme.palette.primary.main,
      },
      '&-underline': {
        position: 'absolute',
        border: `1px ${theme.palette.primary.main} solid`,
        // force GPU acceleration
        transform: 'translate3d(0, 0, 0)',
      },
      '&-animated &-content': {
        transition: theme.transitions.create(['transform']),
        willChange: 'transform',
      },
      '&-animated &-underline': {
        transition: theme.transitions.create(['top', 'left', 'width', 'color']),
        willChange: 'top, left, width, color'
      },
      '&-top, &-bottom': {
        flexDirection: 'row',
      },
      '&-top &-content, &-bottom &-content': {
        display: 'flex',
        width: '100%',
        flexDirection: 'row'
      },
      '&-top &-prevpage, &-bottom &-prevpage': {
        ...commonPagination,
        left: 0,
        background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
      },
      '&-top &-nextpage,&-bottom &-nextpage': {
        ...commonPagination,
        right: 0,
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
      },
      '&-top &-tab,&-bottom &-tab': {
        padding: '8px 0'
      },
      '&-top &-underline, &-bottom &-underline': {
        bottom: 0
      },
      '&-top &-tab': {
        ...theme.hairline.create('bottom')
      },
      '&-bottom &-tab': {
        ...theme.hairline.create('top')
      },
      '&-left,&-right': {
        flexDirection: 'column',
      },
      '&-left &-content,&-right &-content': {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
      },
      '&-left &-tab,&-right &-tab': {
        padding: '0 8px',
      },
      '&-left &-underline': {
        right: 0,
      },
      '&-left &-tab': {
        ...theme.hairline.create('right')
      },
      '&-right &-underline': {
        left: 0,
      },
      '&-right &-tab': {
        ...theme.hairline.create('left')
      }
    }
  }
}