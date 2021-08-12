(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    JjdP: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n('9og8'),
        r = n('WmNS'),
        a = n.n(r),
        o = n('rlch'),
        d =
          'import { ActivityIndicator, Space, Label } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Space direction="vertical">\n      <Label colon>\u52a0\u8f7d\u7c7b\u578b</Label>\n      <Space>\n        <ActivityIndicator />\n        <ActivityIndicator type="spinner" />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u5c3a\u5bf8</Label>\n      <Space>\n        <ActivityIndicator iconSize="small" />\n        <ActivityIndicator iconSize="medium" />\n        <ActivityIndicator iconSize="large" />\n      </Space>\n      <Space>\n        <ActivityIndicator type="spinner" iconSize="small" />\n        <ActivityIndicator type="spinner" iconSize="medium" />\n        <ActivityIndicator type="spinner" iconSize="large" />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u989c\u8272</Label>\n      <Space>\n        <ActivityIndicator color="primary" />\n        <ActivityIndicator color="secondary" />\n        <ActivityIndicator color="success" />\n        <ActivityIndicator color="danger" />\n        <ActivityIndicator color="warning" />\n        <ActivityIndicator color="info" />\n        <ActivityIndicator color="light" />\n        <ActivityIndicator color="dark" />\n      </Space>\n      <Space>\n        <ActivityIndicator type="spinner" color="primary" />\n        <ActivityIndicator type="spinner" color="secondary" />\n        <ActivityIndicator type="spinner" color="success" />\n        <ActivityIndicator type="spinner" color="danger" />\n        <ActivityIndicator type="spinner" color="warning" />\n        <ActivityIndicator type="spinner" color="info" />\n        <ActivityIndicator type="spinner" color="light" />\n        <ActivityIndicator type="spinner" color="dark" />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u6587\u6848</Label>\n      <Space>\n        <ActivityIndicator text="\u52a0\u8f7d\u4e2d..." />\n        <ActivityIndicator type="spinner" text="\u52a0\u8f7d\u4e2d..." />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u5782\u76f4\u6587\u6848</Label>\n      <Space>\n        <ActivityIndicator text="\u52a0\u8f7d\u4e2d..." vertical />\n        <ActivityIndicator type="spinner" text="\u52a0\u8f7d\u4e2d..." vertical />\n      </Space>\n    </Space>\n  </Space>\n);',
        l =
          'import { BackTop, Button, Container, Page, Typography } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Page title="Back top">\n      <Container>\n        {Array(120)\n          .fill(\'\')\n          .map((_, index) => (\n            <Typography key={index}>{index}.text....</Typography>\n          ))}\n      </Container>\n\n      <BackTop>\n        <Button variant="contained">UP</Button>\n      </BackTop>\n    </Page>\n  );\n};',
        s =
          "import { ArrowUp } from '@wonder-ui/icons';\nimport { BackTop, IconButton, useTheme } from '@wonder-ui/core';\n\nexport default () => {\n  const theme = useTheme();\n  return (\n    <div>\n      \u6309\u94ae\u51fa\u73b0\u5728\u53f3\u4e0b\u89d2\n      <BackTop style={{ bottom: 30 }}>\n        <IconButton\n          style={{\n            backgroundColor: theme.palette.colors.blue.A200,\n            color: '#fff'\n          }}\n        >\n          <ArrowUp />\n        </IconButton>\n      </BackTop>\n    </div>\n  );\n};",
        p =
          'import { Button, Backdrop, CircularProgress, useTheme } from \'@wonder-ui/core\';\nimport { useToggle } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const theme = useTheme();\n  const [visible, { toggle }] = useToggle();\n\n  return (\n    <div>\n      <Button onClick={() => toggle()} variant="contained">\n        Show Backdrop\n      </Button>\n\n      <Backdrop\n        visible={visible}\n        onClick={() => toggle()}\n        style={{ zIndex: theme.zIndex.fixed }}\n      >\n        <CircularProgress color="light" />\n      </Backdrop>\n    </div>\n  );\n};',
        c =
          'import { Badge, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <div>\n    <Typography variant="h1" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h2" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h3" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h4" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h5" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h6">\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n  </div>\n);',
        u =
          'import { Badge, Button } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Button variant="contained">\n    Notifications\n    <Badge style={{ marginLeft: 3 }} color="light" text="1" />\n  </Button>\n);',
        f =
          'import { Badge, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Badge color="primary" text="primary" />\n    <Badge color="secondary" text="secondary" />\n    <Badge color="success" text="success" />\n    <Badge color="danger" text="danger" />\n    <Badge color="warning" text="warning" />\n    <Badge color="info" text="info" />\n    <Badge color="light" text="light" />\n    <Badge color="dark" text="dark" />\n  </Space>\n);',
        m =
          'import { Badge, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Badge color="primary" text="primary" rounded />\n    <Badge color="secondary" text="secondary" rounded />\n    <Badge color="success" text="success" rounded />\n    <Badge color="danger" text="danger" rounded />\n    <Badge color="warning" text="warning" rounded />\n    <Badge color="info" text="info" rounded />\n    <Badge color="light" text="light" rounded />\n    <Badge color="dark" text="dark" rounded />\n  </Space>\n);',
        y =
          'import { Badge, Space, styled } from \'@wonder-ui/core\';\n\nconst Block = styled(\'div\')`\n  width: 42px;\n  height: 42px;\n  border-radius: 2px;\n  background: #eee;\n  display: inline-block;\n  vertical-align: middle;\n`;\n\nexport default () => (\n  <Space size="large">\n    <Badge color="danger">\n      <Block></Block>\n    </Badge>\n    <Badge color="danger" text="99+">\n      <Block></Block>\n    </Badge>\n  </Space>\n);',
        E =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button color="primary" variant="contained">\n      Primary\n    </Button>\n    <Button color="secondary" variant="contained">\n      Secondary\n    </Button>\n    <Button color="success" variant="contained">\n      Success\n    </Button>\n    <Button color="danger" variant="contained">\n      Danger\n    </Button>\n    <Button color="warning" variant="contained">\n      Warning\n    </Button>\n    <Button color="info" variant="contained">\n      Info\n    </Button>\n    <Button color="light" variant="contained">\n      Light\n    </Button>\n    <Button color="dark" variant="contained">\n      Dark\n    </Button>\n  </Space>\n);',
        v =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="contained" href="#/components/button" target="_blank">\n      Link\n    </Button>\n    <Button\n      variant="contained"\n      component="input"\n      type="button"\n      value="Input"\n    ></Button>\n    <Button\n      variant="contained"\n      component="input"\n      type="submit"\n      value="Submit"\n    ></Button>\n    <Button\n      variant="contained"\n      component="input"\n      type="reset"\n      value="Reset"\n    ></Button>\n  </Space>\n);',
        H =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="outlined" color="primary">\n      Primary\n    </Button>\n    <Button variant="outlined" color="secondary">\n      Secondary\n    </Button>\n    <Button variant="outlined" color="success">\n      Success\n    </Button>\n    <Button variant="outlined" color="danger">\n      Danger\n    </Button>\n    <Button variant="outlined" color="warning">\n      Warning\n    </Button>\n    <Button variant="outlined" color="info">\n      Info\n    </Button>\n  </Space>\n);',
        h =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="text" color="primary">\n      Primary\n    </Button>\n    <Button variant="text" color="secondary">\n      Secondary\n    </Button>\n    <Button variant="text" color="success">\n      Success\n    </Button>\n    <Button variant="text" color="danger">\n      Danger\n    </Button>\n    <Button variant="text" color="warning">\n      Warning\n    </Button>\n    <Button variant="text" color="info">\n      Info\n    </Button>\n  </Space>\n);',
        g =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button color="primary" variant="contained">\n      Default\n    </Button>\n    <Button color="primary" variant="contained" shape="square">\n      Square\n    </Button>\n    <Button color="primary" variant="contained" shape="round">\n      Round\n    </Button>\n  </Space>\n);',
        M =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Space verticalAlign="start">\n      <Button variant="contained" size="large">\n        Large button\n      </Button>\n      <Button variant="contained" size="medium">\n        Medium button\n      </Button>\n      <Button variant="contained" size="small">\n        Small button\n      </Button>\n    </Space>\n    <Space verticalAlign="start">\n      <Button variant="contained" shape="round" size="large">\n        Large button\n      </Button>\n\n      <Button variant="contained" shape="round" size="medium">\n        Medium button\n      </Button>\n\n      <Button variant="contained" shape="round" size="small">\n        Small button\n      </Button>\n    </Space>\n  </Space>\n);',
        b =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Button variant="contained" fullWidth>\n      Block button\n    </Button>\n    <Button variant="contained" fullWidth>\n      Block button\n    </Button>\n  </Space>\n);',
        L =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="contained" disabled>\n      Contained Button\n    </Button>\n    <Button variant="outlined" disabled>\n      Outlined Button\n    </Button>\n    <Button variant="text" disabled>\n      Text Button\n    </Button>\n  </Space>\n);',
        T =
          "import { Button, ButtonGroup } from '@wonder-ui/core';\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'contained' }}>\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n  </ButtonGroup>\n);",
        C =
          "import { Button, ButtonGroup } from '@wonder-ui/core';\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n  </ButtonGroup>\n);",
        D =
          'import { Button, ButtonGroup, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <ButtonGroup direction="vertical">\n      <Button>Button</Button>\n      <Button>Button</Button>\n      <Button>Button</Button>\n    </ButtonGroup>\n\n    <ButtonGroup direction="vertical" ButtonProps={{ variant: \'contained\' }}>\n      <Button>Button</Button>\n      <Button>Button</Button>\n      <Button>Button</Button>\n    </ButtonGroup>\n\n    <ButtonGroup direction="vertical" ButtonProps={{ variant: \'outlined\' }}>\n      <Button>Button</Button>\n      <Button>Button</Button>\n      <Button>Button</Button>\n    </ButtonGroup>\n  </Space>\n);',
        w =
          "import { Button, ButtonGroup, CheckableGroup } from '@wonder-ui/core';\n\nconst options = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange', disabled: false }\n];\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n    <CheckableGroup\n      options={options}\n      defaultValue={['Apple']}\n      onRenderItem={({ emitOnChange, checked, data, key }) => (\n        <Button\n          key={key}\n          variant={checked ? 'contained' : 'outlined'}\n          onClick={emitOnChange}\n          disabled={data.disabled}\n        >\n          {data.label}\n        </Button>\n      )}\n    />\n  </ButtonGroup>\n);",
        I =
          "import { Button, ButtonGroup, CheckableGroup } from '@wonder-ui/core';\n\nconst options = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange', disabled: true }\n];\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n    <CheckableGroup\n      exclusive //\u662f\u5426\u5355\u9009\n      options={options}\n      defaultValue=\"Apple\"\n      onRenderItem={({ emitOnChange, checked, data, key }) => (\n        <Button\n          key={key}\n          variant={checked ? 'contained' : 'outlined'}\n          onClick={emitOnChange}\n          disabled={data.disabled}\n        >\n          {data.label}\n        </Button>\n      )}\n    />\n  </ButtonGroup>\n);",
        x = "import {} from '@wonder-ui/core';\n\nexport default () => null;",
        P =
          'import { Checkbox, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Checkbox defaultChecked color="primary">\n      Nickname is required\n    </Checkbox>\n    <Checkbox color="primary" disabled>\n      Nickname is required\n    </Checkbox>\n    <Checkbox defaultChecked color="primary" disabled>\n      Nickname is required\n    </Checkbox>\n  </Space>\n);',
        R =
          'import {\n  Container,\n  Checkbox,\n  List,\n  ListItem,\n  ListItemText\n} from \'@wonder-ui/core\';\nimport { useSelections } from \'@wonder-ui/hooks\';\n\nconst dataList = [1, 2, 3];\n\nexport default () => {\n  const { allSelected, isSelected, toggleAll, toggle, partiallySelected } =\n    useSelections(dataList);\n\n  return (\n    <Container size="sm">\n      <List component="div">\n        <ListItem\n          component="label"\n          media={\n            <Checkbox\n              circle\n              name="demo-checkbox"\n              indeterminate={partiallySelected}\n              checked={allSelected}\n              onChange={() => toggleAll()}\n            />\n          }\n        >\n          <ListItemText>Movies</ListItemText>\n        </ListItem>\n        <List component="div">\n          {dataList.map((item, index) => (\n            <ListItem\n              component="label"\n              key={index}\n              media={\n                <Checkbox\n                  circle\n                  name="demo-checkbox"\n                  value={`move ${item}`}\n                  checked={isSelected(item)}\n                  onChange={() => toggle(item)}\n                />\n              }\n            >\n              <ListItemText secondary="Click me!" primary={`Movie ${item}`} />\n            </ListItem>\n          ))}\n        </List>\n      </List>\n    </Container>\n  );\n};',
        S =
          'import {\n  Container,\n  Checkbox,\n  List,\n  ListItem,\n  ListItemText,\n  ListHeader\n} from \'@wonder-ui/core\';\n\nconst dataList = [1, 2, 3];\n\nexport default () => (\n  <Container size="sm">\n    <List component="div">\n      <ListHeader>\u6837\u5f0f1</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          media={<Checkbox circle name="demo-checkbox1" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n    <List component="div">\n      <ListHeader>\u6837\u5f0f2</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          extra={<Checkbox circle name="demo-checkbox2" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n\n    <List component="div">\n      <ListHeader>\u6837\u5f0f3</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          media={<Checkbox name="demo-checkbox3" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n\n    <List component="div">\n      <ListHeader>\u6837\u5f0f4</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          extra={<Checkbox name="demo-checkbox4" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n  </Container>\n);',
        k =
          "import {\n  Button,\n  Collapse,\n  Space,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { setTrue, setFalse, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <Space>\n        <Button variant=\"contained\" onClick={() => setTrue()}>\n          Open\n        </Button>\n        <Button variant=\"contained\" onClick={() => setFalse()}>\n          Close\n        </Button>\n        <Button variant=\"contained\" onClick={() => toggle()}>\n          Toggle\n        </Button>\n      </Space>\n      <WhiteSpace />\n      <Collapse in={visible}>\n        <div\n          style={{\n            border: '1px solid #ccc',\n            padding: 16,\n            boxSizing: 'border-box'\n          }}\n        >\n          <Typography>\n            Some placeholder content for the collapse component. This panel is\n            hidden by default but revealed when the user activates the relevant\n            trigger.\n          </Typography>\n        </div>\n      </Collapse>\n    </div>\n  );\n};",
        B =
          "import {\n  Button,\n  Space,\n  Collapse,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { setTrue, setFalse, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <Space>\n        <Button variant=\"contained\" onClick={() => setTrue()}>\n          Open\n        </Button>\n        <Button variant=\"contained\" onClick={() => setFalse()}>\n          Close\n        </Button>\n        <Button variant=\"contained\" onClick={() => toggle()}>\n          Toggle\n        </Button>\n      </Space>\n      <WhiteSpace />\n      <Collapse in={visible} collapsedSize={30}>\n        <Typography paragraph>default view text</Typography>\n        <div\n          style={{\n            border: '1px solid #ccc',\n            padding: 16,\n            boxSizing: 'border-box'\n          }}\n        >\n          <Typography>\n            Some placeholder content for the collapse component. This panel is\n            hidden by default but revealed when the user activates the relevant\n            trigger.\n          </Typography>\n        </div>\n      </Collapse>\n    </div>\n  );\n};",
        A =
          'import {\n  Button,\n  Space,\n  Collapse,\n  Typography,\n  WhiteSpace\n} from \'@wonder-ui/core\';\nimport { useBoolean } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { setTrue, setFalse, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <Space>\n        <Button variant="contained" onClick={() => setTrue()}>\n          Open\n        </Button>\n        <Button variant="contained" onClick={() => setFalse()}>\n          Close\n        </Button>\n        <Button variant="contained" onClick={() => toggle()}>\n          Toggle\n        </Button>\n      </Space>\n      <WhiteSpace />\n      <Collapse in={visible} direction="horizontal" timeout={500}>\n        <div\n          style={{\n            width: 300,\n            padding: 16,\n            boxSizing: \'border-box\'\n          }}\n        >\n          <Typography>\n            Some placeholder content for the collapse component. This panel is\n            hidden by default but revealed when the user activates the relevant\n            trigger.\n          </Typography>\n        </div>\n      </Collapse>\n    </div>\n  );\n};',
        O =
          'import { CountDown } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <CountDown targetDate="2333-12-31 24:00:00">\n      {({ formattedRes }) => {\n        const { days, hours, minutes, seconds, milliseconds } = formattedRes;\n        return (\n          <p>\n            {days} \u5929 {hours} \u65f6 {minutes} \u5206 {seconds} \u79d2\n          </p>\n        );\n      }}\n    </CountDown>\n  );\n};',
        F =
          "import { Button, CountDown } from '@wonder-ui/core';\nimport * as React from 'react';\n\nexport default () => {\n  const [sended, setSendState] = React.useState(false);\n\n  return (\n    <CountDown>\n      {({ countdown, setTargetDate }) => (\n        <Button\n          variant=\"contained\"\n          disabled={countdown !== 0}\n          onClick={() => {\n            if (!sended) {\n              setSendState(true);\n            }\n\n            setTargetDate(Date.now() + 10 * 1000);\n          }}\n        >\n          {countdown === 0\n            ? sended\n              ? '\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801'\n              : '\u83b7\u53d6\u9a8c\u8bc1\u7801'\n            : `${Math.round(countdown / 1000)}s`}\n        </Button>\n      )}\n    </CountDown>\n  );\n};",
        K =
          "import { DatePicker, withDialog } from '@wonder-ui/core';\nimport dayjs from 'dayjs';\n\nexport default withDialog(({ dialog }) => {\n  return (\n    <DatePicker\n      onConfirm={(value) => {\n        const dateString = dayjs(value).format('YYYY/MM/DD,HH:mm');\n        dialog.toast(dateString);\n      }}\n    />\n  );\n});",
        V =
          "import { DatePicker, withDialog } from '@wonder-ui/core';\nimport dayjs from 'dayjs';\n\nexport default withDialog(({ dialog }) => {\n  return (\n    <DatePicker\n      type=\"date\"\n      title=\"\u9009\u62e9\u5e74\u6708\u65e5\"\n      minDate={new Date(2020, 0, 1)}\n      maxDate={new Date(2025, 10, 1)}\n      currentDate={new Date()}\n      onConfirm={(value) => {\n        const dateString = dayjs(value).format('YYYY/MM/DD');\n        dialog.toast(dateString);\n      }}\n    />\n  );\n});",
        j =
          "import { TimePicker, TimePickerProps, withDialog } from '@wonder-ui/core';\nimport dayjs from 'dayjs';\n\nconst formatter: TimePickerProps['formatter'] = (type, value) => {\n  return type === 'hour' ? `${value}\u65f6` : `${value}\u5206`;\n};\n\nexport default withDialog(({ dialog }) => (\n  <TimePicker\n    formatter={formatter}\n    currentTime={dayjs().format('HH:mm')}\n    // onChange={(value) => dialog.toast(value)}\n    onConfirm={(value) => dialog.toast(value)}\n  />\n));",
        U =
          'import {\n  Button,\n  Container,\n  Dialog,\n  Page,\n  Space,\n  WhiteSpace\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Dialog">\n    <WhiteSpace />\n    <Container>\n      <Space>\n        <Dialog\n          title="\u6807\u9898"\n          text="\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9..."\n          buttons={[\n            {\n              text: \'\u53d6\u6d88\'\n            },\n            {\n              text: \'\u597d\u7684\',\n              primary: true\n            }\n          ]}\n        >\n          <Button variant="contained">\u63d0\u793a\u6846(\u6587\u5b57)</Button>\n        </Dialog>\n        <Dialog\n          title="\u6807\u9898"\n          content={\n            <div>\n              <img\n                src="https://img.99bill.com/z/img/new-pos.png"\n                width={260}\n                height={260}\n                alt="img"\n              />\n            </div>\n          }\n          buttons={[\n            {\n              text: \'\u77e5\u9053\u5566!\',\n              primary: true\n            }\n          ]}\n        >\n          <Button variant="contained">\u63d0\u793a\u6846(\u56fe\u7247)</Button>\n        </Dialog>\n      </Space>\n    </Container>\n  </Page>\n);',
        G =
          "import { Button, Container, Dialog, Page, WhiteSpace } from '@wonder-ui/core';\n\nexport default () => (\n  <Page title=\"Dialog vertical buttons\">\n    <WhiteSpace />\n    <Container>\n      <Dialog\n        buttonsVertical\n        buttons={[\n          {\n            text: '\u6807\u4e3a\u672a\u8bfb',\n            onClick: () => {\n              console.log('\u6807\u4e3a\u672a\u8bfb');\n            }\n          },\n          {\n            text: '\u7f6e\u9876\u804a\u5929',\n            onClick: () => {\n              console.log('\u7f6e\u9876\u804a\u5929');\n            }\n          }\n        ]}\n      >\n        <Button variant=\"contained\">\u5782\u76f4\u6309\u94ae</Button>\n      </Dialog>\n    </Container>\n  </Page>\n);",
        z =
          "import {\n  Button,\n  Container,\n  Page,\n  Space,\n  WhiteSpace,\n  withDialog\n} from '@wonder-ui/core';\n\nexport default withDialog((props) => {\n  const { dialog } = props;\n  return (\n    <Page title=\"Dialogs\">\n      <WhiteSpace />\n      <Container>\n        <Space>\n          <Button\n            variant=\"contained\"\n            onClick={() =>\n              dialog.alert({ title: '\u63d0\u793a', text: '\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9...' })\n            }\n          >\n            \u63d0\u793a\u6846\n          </Button>\n          <Button\n            variant=\"contained\"\n            onClick={() => dialog.alert({ text: '\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9...' })}\n          >\n            \u63d0\u793a\u6846 (\u65e0\u6807\u9898)\n          </Button>\n          <Button\n            variant=\"contained\"\n            onClick={() =>\n              dialog.confirm({ title: '\u786e\u8ba4', text: '\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9...' })\n            }\n          >\n            \u786e\u8ba4\u6846\n          </Button>\n          <Button\n            variant=\"contained\"\n            onClick={() =>\n              dialog.custom({\n                title: '\u64cd\u4f5c',\n                text: '\u8bf7\u9009\u62e9\u4e00\u9879\u64cd\u4f5c',\n                buttonsVertical: true,\n                buttons: [\n                  {\n                    children: '\u6807\u4e3a\u672a\u8bfb',\n                    onClick: () => {\n                      console.log('\u6807\u4e3a\u672a\u8bfb');\n                    }\n                  },\n                  {\n                    children: '\u7f6e\u9876\u804a\u5929',\n                    onClick: () => {\n                      console.log('\u7f6e\u9876\u804a\u5929');\n                    }\n                  },\n                  {\n                    children: '\u53d6\u6d88',\n                    onClick: () => {}\n                  }\n                ]\n              })\n            }\n          >\n            \u64cd\u4f5c\u6846\n          </Button>\n        </Space>\n      </Container>\n    </Page>\n  );\n});",
        W =
          "import {\n  Button,\n  Container,\n  Page,\n  WhiteSpace,\n  withDialog\n} from '@wonder-ui/core';\n\nexport default withDialog((props) => {\n  const { dialog } = props;\n\n  return (\n    <Page title=\"Dialog stack\">\n      <WhiteSpace />\n      <Container>\n        <Button\n          variant=\"contained\"\n          onClick={() => {\n            dialog.alert({ title: '\u6807\u9898', text: 'dialog 1' });\n            dialog.alert({ title: '\u6807\u9898', text: 'dialog 2' });\n            dialog.confirm({ title: '\u6807\u9898', text: '\u786e\u5b9a\u8fd9\u4e48\u5e72\u5417?' });\n            dialog.alert({ title: '\u6807\u9898', text: 'dialog 4' });\n            dialog.toast('\u961f\u5217\u7ed3\u675f');\n          }}\n        >\n          \u63d0\u793a\u6846\n        </Button>\n      </Container>\n    </Page>\n  );\n});",
        N =
          'import { Page, Space, DialogContent, WhiteSpace } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Dialog content">\n    <WhiteSpace />\n    <Space horizontalAlign="center">\n      <DialogContent\n        style={{ width: 220 }}\n        title="\u6807\u9898"\n        text="\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9..."\n        buttons={[\n          {\n            text: \'\u53d6\u6d88\',\n            onClick: () => {}\n          },\n          {\n            text: \'\u597d\u7684\',\n            primary: true,\n            onClick: () => {}\n          }\n        ]}\n      />\n    </Space>\n  </Page>\n);',
        _ =
          'import { Divider, Space, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider />\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider />\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n  </Space>\n);',
        q =
          'import { Divider, Space, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider textAlign="center">Text</Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider textAlign="left">Left Text</Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider textAlign="right">Right Text</Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n  </Space>\n);',
        Y =
          "import { Typography, Divider } from '@wonder-ui/core';\n\nexport default () => (\n  <div style={{ display: 'flex' }}>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider direction=\"vertical\" flexItem>\n      VERTICAL\n    </Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n  </div>\n);",
        $ =
          'import { Divider, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space split={<Divider direction="vertical" style={{ height: \'1em\' }} />}>\n    Text\n    <a href="#">Link</a>\n    <a href="#">Link</a>\n  </Space>\n);',
        Z =
          "import {\n  Button,\n  Drawer,\n  DrawerProps,\n  Page,\n  Space,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useToggle } from '@wonder-ui/hooks';\n\ntype Anchor = DrawerProps['anchor'];\n\nexport default () => {\n  const [visible, { toggle: toggleVisible }] = useToggle(false);\n  const [anchor, { toggle }] = useToggle<Anchor>('left');\n\n  const open = (anchor: Anchor) => {\n    toggle(anchor);\n    toggleVisible();\n  };\n\n  return (\n    <Page title=\"Drawer\">\n      <WhiteSpace />\n      <Space>\n        <Button variant=\"contained\" onClick={() => open('left')}>\n          \u5de6\n        </Button>\n        <Button variant=\"contained\" onClick={() => open('right')}>\n          \u53f3\n        </Button>\n        <Button variant=\"contained\" onClick={() => open('top')}>\n          \u4e0a\n        </Button>\n        <Button variant=\"contained\" onClick={() => open('bottom')}>\n          \u4e0b\n        </Button>\n      </Space>\n\n      <Drawer anchor={anchor} visible={visible} onClose={() => toggleVisible()}>\n        <Page\n          title=\"Basic Drawer\"\n          style={{\n            position: 'relative',\n            ...(['left', 'right'].indexOf(anchor || '') !== -1\n              ? { width: 260, height: '100%' }\n              : { width: '100%', height: 200 })\n          }}\n          showCloseButton\n          onClose={() => toggleVisible()}\n        >\n          <div style={{ padding: '10px 16px' }}>\n            <Typography>\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n            </Typography>\n          </div>\n        </Page>\n      </Drawer>\n    </Page>\n  );\n};",
        X =
          'import { DropdownMenu, DropdownMenuItem, Page, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="DropdownMenu">\n    <Space direction="vertical">\n      \u57fa\u672c\u4f7f\u7528\n      <DropdownMenu>\n        <DropdownMenuItem arrow overlay={<div>\u5168\u90e8\u5546\u54c1 ... </div>}>\n          \u5168\u90e8\u5546\u54c1\n        </DropdownMenuItem>\n        <DropdownMenuItem arrow overlay={<div>\u597d\u8bc4\u6392\u5e8f ...</div>}>\n          \u597d\u8bc4\u6392\u5e8f\n        </DropdownMenuItem>\n      </DropdownMenu>\n    </Space>\n  </Page>\n);',
        J =
          'import {\n  Button,\n  Divider,\n  DropdownMenu,\n  DropdownMenuItem,\n  Page,\n  Radio,\n  List,\n  ListItem,\n  ListItemText,\n  Toggle\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="With list">\n    <DropdownMenu>\n      <DropdownMenuItem\n        arrow\n        overlay={\n          <div>\n            <List component="div">\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u5168\u90e8\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u65b0\u6b3e\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u6d3b\u52a8\u5546\u54c1</ListItemText>\n              </ListItem>\n            </List>\n          </div>\n        }\n      >\n        \u5168\u90e8\u5546\u54c1\n      </DropdownMenuItem>\n      <DropdownMenuItem\n        arrow\n        overlay={({ onClose }) => (\n          <div>\n            <List>\n              <ListItem divider extra={<Toggle />}>\n                <ListItemText>\u5305\u90ae</ListItemText>\n              </ListItem>\n              <ListItem extra={<Toggle defaultChecked />}>\n                <ListItemText>\u56e2\u8d2d</ListItemText>\n              </ListItem>\n            </List>\n            <Divider />\n            <div style={{ padding: 16 }}>\n              <Button\n                variant="contained"\n                fullWidth\n                disableFocusRipple\n                onClick={onClose}\n              >\n                \u786e \u8ba4\n              </Button>\n            </div>\n          </div>\n        )}\n      >\n        \u597d\u8bc4\u6392\u5e8f\n      </DropdownMenuItem>\n    </DropdownMenu>\n  </Page>\n);',
        Q =
          'import {\n  Button,\n  Divider,\n  DropdownMenu,\n  DropdownMenuItem,\n  Page,\n  Radio,\n  List,\n  ListItem,\n  ListItemText,\n  Toggle\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Auto width">\n    <DropdownMenu widthAuto>\n      <DropdownMenuItem\n        arrow\n        overlay={\n          <div>\n            <List component="div">\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u5168\u90e8\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u65b0\u6b3e\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u6d3b\u52a8\u5546\u54c1</ListItemText>\n              </ListItem>\n            </List>\n          </div>\n        }\n      >\n        \u5168\u90e8\u5546\u54c1\n      </DropdownMenuItem>\n      <DropdownMenuItem\n        arrow\n        overlay={({ onClose }) => (\n          <div>\n            <List>\n              <ListItem divider extra={<Toggle />}>\n                <ListItemText>\u5305\u90ae</ListItemText>\n              </ListItem>\n              <ListItem extra={<Toggle defaultChecked />}>\n                <ListItemText>\u56e2\u8d2d</ListItemText>\n              </ListItem>\n            </List>\n            <Divider />\n            <div style={{ padding: 16 }}>\n              <Button\n                variant="contained"\n                fullWidth\n                disableFocusRipple\n                onClick={onClose}\n              >\n                \u786e \u8ba4\n              </Button>\n            </div>\n          </div>\n        )}\n      >\n        \u597d\u8bc4\u6392\u5e8f\n      </DropdownMenuItem>\n\n      <DropdownMenuItem>\u9500\u91cf</DropdownMenuItem>\n      <DropdownMenuItem>\u53e3\u7891</DropdownMenuItem>\n    </DropdownMenu>\n  </Page>\n);',
        ee =
          "import { Empty } from '@wonder-ui/core';\n\nexport default () => <Empty />;",
        te =
          'import { Button, Empty } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Empty\n    image={\n      <img\n        width="150"\n        src="https://img01.yzcdn.cn/vant/empty-image-search.png"\n      />\n    }\n    description="\u81ea\u5b9a\u4e49\u63cf\u8ff0"\n  >\n    <Button variant="contained">\u81ea\u5b9a\u4e49\u6309\u94ae</Button>\n  </Empty>\n);',
        ne =
          'import { Input, Space } from \'@wonder-ui/core\';\nimport * as React from \'react\';\n\nexport default () => {\n  const [value, setValue] = React.useState(\'123123\');\n\n  return (\n    <Space direction="vertical">\n      <Input\n        placeholder="Basic"\n        value={value}\n        onChange={(e) => {\n          setValue(e.target.value);\n        }}\n      />\n\n      <Input readOnly placeholder="Basic readOnly" />\n\n      <Input readOnly disabledActiveStyle placeholder="Basic readOnly" />\n\n      <Input\n        readOnly\n        disabledActiveStyle\n        borderless\n        placeholder="Basic readOnly"\n      />\n\n      <Input disabled placeholder="Basic disabled" />\n\n      <Input disabled borderless placeholder="Basic disabled" />\n    </Space>\n  );\n};',
        ie =
          'import { Input, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Space direction="vertical">\n      <Input placeholder="Input with clear button" allowClear />\n      <Input\n        allowClear\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n      <Input\n        placeholder="Textare with clear button"\n        allowClear\n        multiline\n        minRows={3}\n      />\n    </Space>\n  );\n};',
        re =
          'import { Input, Space, Tooltip, styled } from \'@wonder-ui/core\';\nimport { InfoCircle, Person } from \'@wonder-ui/icons\';\n\nconst InputExtra = styled(\'div\')`\n  background: rgb(243, 242, 241);\n  color: rgb(96, 94, 92);\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  padding: 0 8px;\n`;\n\nexport default () => {\n  return (\n    <Space direction="vertical">\n      <Input\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<Person fontSize="inherit" color="secondary" />}\n        suffix={\n          <Tooltip arrow title="Tips tips tips">\n            <InfoCircle fontSize="inherit" color="secondary" />\n          </Tooltip>\n        }\n      />\n      <Input\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n      <Input\n        placeholder="\u8bf7\u8f93\u5165\u7f51\u5740"\n        prefix={\n          <InputExtra style={{ marginLeft: -8 }}>\n            <span>http://</span>\n          </InputExtra>\n        }\n        suffix={\n          <InputExtra style={{ marginRight: -8 }}>\n            <span>.com</span>\n          </InputExtra>\n        }\n      />\n      <Input\n        readOnly\n        disabledActiveStyle\n        placeholder="\u4ec5\u663e\u793a\u6570\u503c"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n      <Input\n        disabled\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n    </Space>\n  );\n};',
        ae =
          'import { Input } from \'@wonder-ui/core\';\n\nexport default () => {\n  return <Input placeholder="Basic" borderless />;\n};',
        oe =
          'import { Input } from \'@wonder-ui/core\';\n\nexport default () => {\n  return <Input placeholder="5\u4e2a\u5b57" maxLength={5} />;\n};',
        de =
          '/**\n * title: \u591a\u884c\u8f93\u5165\n * desc: \u9650\u5236\u8f93\u5165\u6846\u9ad8\u5ea6: `maxRows`, `minRows`\n */\nimport { Input, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Space verticalAlign="start">\n      <Input\n        style={{ width: 300 }}\n        multiline\n        minRows={1}\n        maxRows={3}\n        placeholder="\u6587\u672c\u57df"\n      />\n      <Input\n        style={{ width: 300 }}\n        multiline\n        maxRows={3}\n        placeholder="\u6587\u672c\u57df"\n      />\n    </Space>\n  );\n};',
        le =
          "import { Input, InputNumber, Space } from '@wonder-ui/core';\nimport { formatBankCard } from 'util-helpers';\n\nexport default () => {\n  return (\n    <Space direction=\"vertical\">\n      <Input\n        placeholder=\"\u8bf7\u8f93\u5165\u94f6\u884c\u5361\"\n        maxLength={22}\n        formatter={(value) => formatBankCard(value)}\n        parser={(displayValue) => displayValue.replace(' ', '')}\n      />\n      <InputNumber\n        placeholder=\"\u8bf7\u8f93\u5165\u91d1\u989d\"\n        defaultValue={1000}\n        formatter={(value) =>\n          `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')\n        }\n        parser={(value) => value!.replace(/\\$\\s?|(,*)/g, '')}\n      />\n    </Space>\n  );\n};",
        se =
          'import * as React from \'react\';\nimport { Button, Input, InputAction, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  const actionRef = React.useRef<InputAction>();\n\n  return (\n    <Space direction="vertical">\n      <Space>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ cursor: \'start\' });\n          }}\n        >\n          Focus at first\n        </Button>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ cursor: \'end\' });\n          }}\n        >\n          Focus at last\n        </Button>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ cursor: \'all\' });\n          }}\n        >\n          Focus to select all\n        </Button>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ preventScroll: true });\n          }}\n        >\n          Focus prevent scroll\n        </Button>\n      </Space>\n      <Input\n        actionRef={actionRef}\n        placeholder="\u8bf7\u8f93\u5165"\n        defaultValue="\u805a\u7126\u989d\u5916\u914d\u7f6e\u5c5e\u6027"\n      />\n    </Space>\n  );\n};',
        pe =
          'import { Input, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Space>\n      <Input type="password" placeholder="Input password" />\n    </Space>\n  );\n};',
        ce =
          'import { InputNumber, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <InputNumber placeholder="Basic" defaultValue={3} />\n    <InputNumber placeholder="Disable StepHandler" disableStepHandler />\n    <InputNumber placeholder="Disabled" disabled />\n  </Space>\n);',
        ue =
          "import { InputNumber, Space } from '@wonder-ui/core';\n\nfunction onChange(value: string) {\n  console.log('changed', value);\n}\n\nexport default () => (\n  <Space>\n    <InputNumber\n      defaultValue={1000}\n      formatter={(value) => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}\n      parser={(value) => value!.replace(/\\$\\s?|(,*)/g, '')}\n      onChange={onChange}\n    />\n    <InputNumber\n      defaultValue={100}\n      min={0}\n      max={100}\n      formatter={(value) => `${value}%`}\n      parser={(value) => value!.replace('%', '')}\n      onChange={onChange}\n    />\n  </Space>\n);",
        fe =
          'import { InputNumber, Space } from \'@wonder-ui/core\';\n\nfunction onChange(value: string) {\n  console.log(\'changed\', value);\n}\n\nexport default () => (\n  <Space>\n    <InputNumber\n      defaultValue="1"\n      min="0"\n      max="10"\n      step="0.00000000000001"\n      onChange={onChange}\n      stringMode\n    />\n  </Space>\n);',
        me =
          "import * as React from 'react';\nimport { Checkbox, InputNumber, Space } from '@wonder-ui/core';\n\nexport default () => {\n  const [keyboard, setKeyboard] = React.useState(true);\n  return (\n    <Space>\n      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />\n\n      <Checkbox\n        onChange={() => {\n          setKeyboard(!keyboard);\n        }}\n        checked={keyboard}\n      >\n        Toggle keyboard\n      </Checkbox>\n    </Space>\n  );\n};",
        ye =
          "import * as React from 'react';\nimport { Button, InputNumber, Space } from '@wonder-ui/core';\n\nexport default () => {\n  const [value, setValue] = React.useState<string | number>('99');\n  return (\n    <Space>\n      <InputNumber min={1} max={10} value={value} onChange={setValue} />\n      <Button\n        color=\"primary\"\n        variant=\"contained\"\n        onClick={() => {\n          setValue(99);\n        }}\n      >\n        Reset\n      </Button>\n    </Space>\n  );\n};",
        Ee =
          'import * as React from \'react\';\nimport {\n  Button,\n  InputNumber,\n  InputNumberAction,\n  Space,\n  StepButton\n} from \'@wonder-ui/core\';\n\nconst UIButton = StepButton.withComponent(Button);\n\nexport default () => {\n  const actionRef = React.useRef<InputNumberAction>(null);\n  return (\n    <Space>\n      <UIButton\n        variant="contained"\n        onStep={() => {\n          actionRef.current?.onInternalStep(false);\n        }}\n      >\n        -\n      </UIButton>\n      <InputNumber\n        actionRef={actionRef}\n        placeholder="Basic"\n        defaultValue={1}\n        min={1}\n        max={10}\n        disableStepHandler\n        style={{ textAlign: \'center\', width: 80 }}\n      />\n      <UIButton\n        variant="contained"\n        onStep={() => {\n          actionRef.current?.onInternalStep(true);\n        }}\n      >\n        +\n      </UIButton>\n    </Space>\n  );\n};',
        ve =
          "import { Label, Space, Input } from '@wonder-ui/core';\n\nexport default () => (\n  <Space direction=\"vertical\">\n    <Label>I'm a Label</Label>\n    <Label required requiredMark={false}>\n      I'm a required Label\n    </Label>\n    <Label required>I'm a required Label</Label>\n    <Label disalbed>I'm a disabled Label</Label>\n\n    <Space>\n      <Label required colon>\n        A Label for An Input\n      </Label>\n      <Input />\n    </Space>\n  </Space>\n);",
        He =
          'import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText,\n  Divider,\n  WhiteSpace\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Simple list">\n    <List>\n      <ListHeader>\u5217\u8868</ListHeader>\n      <ListItem>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n\n      <Divider component="li" />\n\n      <ListItem>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n\n      <WhiteSpace component="li" />\n\n      <ListItem>\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n\n      <Divider component="li" />\n\n      <ListItem>\n        <ListItemText>Item 4</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);',
        he =
          'import { Page, List, ListItem, ListItemText } from \'@wonder-ui/core\';\n\nconst ListItemLink = ListItem.withComponent(\'a\');\n\nexport default () => (\n  <Page title="Link">\n    <List component="div">\n      <ListItemLink divider href="#\u5217\u8868\u94fe\u63a5">\n        <ListItemText>Link 1</ListItemText>\n      </ListItemLink>\n\n      <ListItemLink divider href="#\u5217\u8868\u94fe\u63a5" extra={<span>CEO</span>}>\n        <ListItemText>Link 2</ListItemText>\n      </ListItemLink>\n\n      <ListItemLink divider href="#\u5217\u8868\u94fe\u63a5" arrow="horizontal">\n        <ListItemText>Link 3</ListItemText>\n      </ListItemLink>\n\n      <ListItemLink\n        href="#\u5217\u8868\u94fe\u63a5"\n        arrow="horizontal"\n        extra={<span>CEO</span>}\n      >\n        <ListItemText>Link 4</ListItemText>\n      </ListItemLink>\n    </List>\n  </Page>\n);',
        ge =
          "import { Collapse, Page, List, ListItem, ListItemText } from '@wonder-ui/core';\nimport { HeartFill } from '@wonder-ui/icons';\nimport { useToggle } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { toggle }] = useToggle(true);\n  return (\n    <Page title=\"Nested list\">\n      <List>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 1</ListItemText>\n        </ListItem>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 2</ListItemText>\n        </ListItem>\n\n        <ListItem\n          arrow={visible ? 'vertical-up' : 'vertical'}\n          onClick={() => toggle()}\n          button\n          divider\n        >\n          Item 3\n        </ListItem>\n\n        <Collapse in={visible}>\n          <List>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 1</ListItemText>\n            </ListItem>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 2</ListItemText>\n            </ListItem>\n\n            <ListItem divider>\n              <ListItemText>Item 3</ListItemText>\n            </ListItem>\n          </List>\n        </Collapse>\n\n        <ListItem divider>\n          <ListItemText>Item 4</ListItemText>\n        </ListItem>\n        <ListItem divider>\n          <ListItemText>Item 5</ListItemText>\n        </ListItem>\n      </List>\n    </Page>\n  );\n};",
        Me =
          "import {\n  Collapse,\n  Page,\n  List,\n  ListItem,\n  ListItemText,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { HeartFill } from '@wonder-ui/icons';\nimport { useToggle } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { toggle }] = useToggle(true);\n  return (\n    <Page title=\"Inset\">\n      <WhiteSpace />\n      <List inset>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 1</ListItemText>\n        </ListItem>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 2</ListItemText>\n        </ListItem>\n\n        <ListItem\n          onClick={() => toggle()}\n          button\n          arrow={visible ? 'vertical-up' : 'vertical'}\n          divider\n        >\n          <ListItemText>Item 3</ListItemText>\n        </ListItem>\n\n        <Collapse in={visible}>\n          <List>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 1</ListItemText>\n            </ListItem>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 2</ListItemText>\n            </ListItem>\n\n            <ListItem divider>\n              <ListItemText>Item 3</ListItemText>\n            </ListItem>\n          </List>\n        </Collapse>\n\n        <ListItem divider>\n          <ListItemText>Item 4</ListItemText>\n        </ListItem>\n        <ListItem>\n          <ListItemText>Item 5</ListItemText>\n        </ListItem>\n      </List>\n    </Page>\n  );\n};",
        be =
          'import {\n  Page,\n  List,\n  ListHeader,\n  ListItem,\n  ListItemText\n} from \'@wonder-ui/core\';\nimport { FileEarmarkFill } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Page title="List with icon">\n    <List>\n      <ListHeader>\u6587\u4ef6\u5939</ListHeader>\n      <ListItem divider media={<FileEarmarkFill />}>\n        <ListItemText primary="Index" secondary="Jan 9, 2014" />\n      </ListItem>\n      <ListItem divider media={<FileEarmarkFill />}>\n        <ListItemText primary="Index 2" secondary="Jan 9, 2014" />\n      </ListItem>\n      <ListItem media={<FileEarmarkFill />}>\n        <ListItemText primary="Index 3" secondary="Jan 9, 2014" />\n      </ListItem>\n    </List>\n  </Page>\n);',
        Le =
          'import {\n  Badge,\n  Page,\n  List,\n  ListHeader,\n  ListItem,\n  ListItemText\n} from \'@wonder-ui/core\';\nimport { InfoCircleFill, PersonCircle, TrashFill } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Page title="Layout">\n    <List>\n      <ListHeader>Simple List</ListHeader>\n      <ListItem divider>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem divider>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem divider>\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Data list, with icons</ListHeader>\n      <ListItem divider media={<PersonCircle />} extra={<span>CEO</span>}>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<Badge color="secondary" text="5" />}\n      >\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<Badge color="secondary" text="5" />}\n      >\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Data list, with button</ListHeader>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<InfoCircleFill fontSize="inherit" />}\n      >\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<InfoCircleFill fontSize="inherit" />}\n      >\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<TrashFill fontSize="inherit" />}\n      >\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Links</ListHeader>\n      <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem button divider arrow="horizontal">\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Links, Secondary text</ListHeader>\n      <ListItem\n        button\n        divider\n        arrow="horizontal"\n        media={<PersonCircle />}\n        extra={<span>CEO</span>}\n      >\n        <ListItemText primary={\'Primary text\'} secondary={\'Secondary text\'} />\n      </ListItem>\n      <ListItem\n        button\n        divider\n        arrow="horizontal"\n        media={<PersonCircle />}\n        extra={<span>CEO</span>}\n      >\n        <ListItemText primary={\'Primary text\'} secondary={\'Secondary text\'} />\n      </ListItem>\n      <ListItem button arrow="horizontal" media={<PersonCircle />}>\n        <ListItemText primary={\'Primary text\'} secondary={\'Secondary text\'} />\n      </ListItem>\n    </List>\n  </Page>\n);',
        Te =
          'import * as React from \'react\';\nimport {\n  Page,\n  List,\n  ListItem,\n  ListItemText,\n  Typography,\n  IconButton\n} from \'@wonder-ui/core\';\nimport { InfoCircle } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Page title="Meida list">\n    <List>\n      <ListItem\n        divider\n        alignItems="flex-start"\n        arrow="horizontal"\n        extra={\n          <IconButton size="small">\n            <InfoCircle />\n          </IconButton>\n        }\n        media={\n          <img\n            width="70"\n            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"\n            alt=""\n          />\n        }\n      >\n        <ListItemText\n          primary="Yellow Submarine"\n          secondary={\n            <React.Fragment>\n              <Typography variant="body2" color="textPrimary">\n                Beatles\n              </Typography>\n              <Typography variant="body2" lineClamp={2} color="textSecondary">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n                sagittis tellus ut turpis condimentum, ut dignissim lacus\n                tincidunt. Cras dolor metus, ultrices condimentum sodales sit\n                amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris\n                rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo\n                augue id, pulvinar lacus.\n              </Typography>\n            </React.Fragment>\n          }\n        />\n      </ListItem>\n      <ListItem\n        arrow="horizontal"\n        extra={<InfoCircle />}\n        media={\n          <img\n            width="70"\n            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"\n            alt=""\n          />\n        }\n      >\n        <ListItemText\n          primary="Yellow Submarine"\n          secondary={\n            <Typography variant="body2" lineClamp={4} color="textSecondary">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n              sagittis tellus ut turpis condimentum, ut dignissim lacus\n              tincidunt. Cras dolor metus, ultrices condimentum sodales sit\n              amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris\n              rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo\n              augue id, pulvinar lacus.\n            </Typography>\n          }\n        />\n      </ListItem>\n    </List>\n  </Page>\n);',
        Ce =
          'import {\n  Checkbox,\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText\n} from \'@wonder-ui/core\';\n\nconst ListLabel = ListItemText.withComponent(\'label\');\n\nexport default () => (\n  <Page title="Checkbox">\n    <List>\n      <ListHeader>Settings</ListHeader>\n      <ListItem button divider media={<Checkbox id="checkbox-wifi1" />}>\n        <ListLabel component="label" htmlFor="checkbox-wifi1">\n          Wi-Fi\n        </ListLabel>\n      </ListItem>\n      <ListItem button media={<Checkbox id="checkbox-wifi2" />}>\n        <ListLabel component="label" htmlFor="checkbox-wifi2">\n          Wi-Fi 2\n        </ListLabel>\n      </ListItem>\n    </List>\n  </Page>\n);',
        De =
          "import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText,\n  Toggle\n} from '@wonder-ui/core';\nimport { Wifi } from '@wonder-ui/icons';\n\nexport default () => (\n  <Page title=\"Switch\">\n    <List>\n      <ListHeader>Settings</ListHeader>\n      <ListItem divider media={<Wifi />} extra={<Toggle />}>\n        <ListItemText>Wi-Fi</ListItemText>\n      </ListItem>\n      <ListItem media={<Wifi />} extra={<Toggle />}>\n        <ListItemText>Wi-Fi 2</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);",
        we =
          "import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText\n} from '@wonder-ui/core';\n\nconst dataList = Array(10).fill('');\n\nexport default () => (\n  <Page title=\"Sticky\">\n    <List>\n      <ListHeader sticky>sticky 0</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem key={index}>\n          <ListItemText>Item {index}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n    <List>\n      <ListHeader sticky>sticky 1</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem key={index}>\n          <ListItemText>Item {index}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n    <List>\n      <ListHeader sticky>sticky 2</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem key={index}>\n          <ListItemText>Item {index}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n  </Page>\n);",
        Ie =
          "import {\n  Page,\n  CircularProgress,\n  List,\n  ListItem,\n  ListItemText,\n  styled\n} from '@wonder-ui/core';\nimport { useDynamicList } from '@wonder-ui/hooks';\nimport * as React from 'react';\n\nconst Indicator = styled('div')`\n  display: flex;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n`;\n\nconst dataList = Array(12).fill('');\n\nexport default () => {\n  const { list, merge } = useDynamicList(dataList);\n  const scrollRef = React.useRef<HTMLDivElement>(null);\n\n  const handleScroll = () => {\n    const node = scrollRef.current;\n    if (node) {\n      if (node.scrollTop === node.scrollHeight - node.offsetHeight) {\n        setTimeout(() => {\n          merge(list.length - 1, dataList);\n        }, 1000);\n      }\n    }\n  };\n\n  return (\n    <Page\n      title=\"Infinite scroll\"\n      ContentRef={scrollRef}\n      ContentProps={{\n        onScroll: handleScroll\n      }}\n    >\n      <List>\n        {list.map((item, index) => (\n          <ListItem key={index}>\n            <ListItemText>Item {index}</ListItemText>\n          </ListItem>\n        ))}\n      </List>\n      <Indicator>\n        <CircularProgress size={22} />\n      </Indicator>\n    </Page>\n  );\n};",
        xe =
          "import {\n  Container,\n  Page,\n  List,\n  ListHeader,\n  ListItem,\n  ListItemText,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useVirtualList } from '@wonder-ui/hooks';\n\nconst dataList = Array(2000).fill('');\n\nexport default () => {\n  const { list, containerProps, wrapperProps } = useVirtualList(dataList, {\n    overscan: 20,\n    itemHeight: 44\n  });\n\n  return (\n    <Page title=\"Virtual list\" ContentProps={containerProps}>\n      <Container>\n        <WhiteSpace />\n        <Typography paragraph>\n          This example shows how to use Virtual List\n        </Typography>\n      </Container>\n\n      <List {...wrapperProps}>\n        <ListHeader sticky>Virtual List</ListHeader>\n        {list.map(({ data, index }) => (\n          <ListItem key={index} style={{ height: 44 }}>\n            <ListItemText>Item {index}</ListItemText>\n          </ListItem>\n        ))}\n      </List>\n    </Page>\n  );\n};",
        Pe =
          'import {\n  Page,\n  List,\n  ListInputItem,\n  ListHeader,\n  IconButton,\n  Button\n} from \'@wonder-ui/core\';\nimport { Person, InfoCircle } from \'@wonder-ui/icons\';\n\nexport default () => {\n  return (\n    <Page>\n      <List>\n        <ListHeader>\u57fa\u672c\u7528\u6cd5</ListHeader>\n        <ListInputItem label="\u6587\u672c" placeholder="\u8bf7\u8f93\u5165\u6587\u672c" required />\n      </List>\n\n      <List>\n        <ListHeader>\u7c7b\u578b</ListHeader>\n        <ListInputItem\n          divider\n          type="text"\n          label="\u540d\u5b57"\n          placeholder="\u8bf7\u8f93\u5165\u540d\u5b57"\n          required\n        />\n        <ListInputItem\n          divider\n          type="password"\n          label="\u5bc6\u7801"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          required\n        />\n        <ListInputItem\n          divider\n          type="tel"\n          label="\u624b\u673a\u53f7"\n          placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u53f7"\n        />\n        <ListInputItem\n          divider\n          type="email"\n          label="\u90ae\u7bb1"\n          placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1"\n        />\n        <ListInputItem\n          divider\n          type="number"\n          label="\u6570\u5b57"\n          placeholder="\u8bf7\u8f93\u5165\u6570\u5b57"\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u9ad8\u5ea6\u81ea\u9002\u5e94</ListHeader>\n        <ListInputItem label="\u591a\u884c\u6587\u672c" multiline placeholder="\u8bf7\u8f93\u5165\u6587\u672c" />\n      </List>\n\n      <List>\n        <ListHeader>\u56fe\u6807</ListHeader>\n        <ListInputItem\n          divider\n          label="\u6587\u672c"\n          prefix={<Person fontSize="small" />}\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n        />\n        <ListInputItem\n          divider\n          label="\u6587\u672c"\n          prefix={<Person fontSize="small" />}\n          suffix={\n            <IconButton edge="end" size="small">\n              <InfoCircle fontSize="small" />\n            </IconButton>\n          }\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n        />\n        <ListInputItem\n          allowClear\n          label="\u6587\u672c"\n          prefix={<Person fontSize="small" />}\n          placeholder="\u663e\u793a\u6e05\u9664\u56fe\u6807"\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u63d2\u5165\u6309\u94ae</ListHeader>\n        <ListInputItem\n          allowClear\n          label="\u77ed\u4fe1\u9a8c\u8bc1\u7801"\n          placeholder="\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801"\n          extra={\n            <Button variant="outlined" size="small">\n              \u77ed\u4fe1\u9a8c\u8bc1\u7801\n            </Button>\n          }\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u7981\u7528&\u53ea\u8bfb</ListHeader>\n        <ListInputItem\n          divider\n          readOnly\n          label="\u6587\u672c"\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          value="ReadOnly text"\n        />\n        <ListInputItem\n          label="\u6587\u672c"\n          disabled\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          value="Disabled text"\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u9519\u8bef\u63d0\u793a</ListHeader>\n        <ListInputItem\n          divider\n          label="\u6587\u672c"\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          description="\u4fe1\u606f\u63d0\u793a"\n          suffix={\n            <IconButton edge="end" size="small">\n              <InfoCircle fontSize="small" />\n            </IconButton>\n          }\n        />\n        <ListInputItem\n          label="\u6587\u672c"\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          description="\u4fe1\u606f\u63d0\u793a"\n          errorMessage="\u8bf7\u8f93\u5165\u6587\u672c"\n        />\n      </List>\n    </Page>\n  );\n};',
        Re =
          'import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  Label,\n  Input,\n  Row,\n  Col,\n  Typography,\n  IconButton,\n  withDialog\n} from \'@wonder-ui/core\';\nimport { InfoCircle } from \'@wonder-ui/icons\';\n\nexport default withDialog((props) => (\n  <Page>\n    <List>\n      <ListHeader>\u81ea\u5b9a\u4e49</ListHeader>\n      <ListItem\n        extra={\n          <IconButton\n            edge="end"\n            onClick={() => {\n              props.dialog.toast(\'\u63d0\u793a\u6587\u6848\u63d0\u793a\u6587\u6848\');\n            }}\n          >\n            <InfoCircle fontSize="small" />\n          </IconButton>\n        }\n        alignItems="flex-start"\n      >\n        <Row style={{ width: \'100%\' }}>\n          <Col col={3}>\n            <Label\n              style={{ width: \'100%\', paddingTop: 6 }}\n              required\n              colon\n              labelAlign="right"\n            >\n              \u6587\u672c\n            </Label>\n          </Col>\n          <Col col={9}>\n            <Input\n              borderless\n              placeholder="\u8bf7\u8f93\u5165"\n              style={{ padding: 0, height: 36 }}\n            />\n            <Typography color="textSecondary">\u63d0\u793a\u6587\u6848\u63d0\u793a\u6587\u6848</Typography>\n            <Typography color="error">\u63d0\u793a\u6587\u6848\u63d0\u793a\u6587\u6848</Typography>\n          </Col>\n        </Row>\n      </ListItem>\n    </List>\n  </Page>\n));',
        Se =
          'import { Button, Fade, Modal, ModalContent, Typography } from \'@wonder-ui/core\';\nimport { useBoolean } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { setFalse, setTrue }] = useBoolean();\n\n  return (\n    <div>\n      <Button variant="contained" onClick={() => setTrue()}>\n        Open\n      </Button>\n\n      <Modal autoFocus visible={visible} onClose={() => setFalse()}>\n        <Fade>\n          <ModalContent\n            title="Modal Title"\n            onOk={() => setFalse()}\n            onClose={() => setFalse()}\n            onCancel={() => setFalse()}\n          >\n            <Typography>some contents...</Typography>\n            <Typography>some contents...</Typography>\n            <Typography>some contents...</Typography>\n          </ModalContent>\n        </Fade>\n      </Modal>\n    </div>\n  );\n};',
        ke =
          "import {\n  Button,\n  Fade,\n  Modal,\n  styled,\n  Typography,\n  WhiteSpace,\n  Space,\n  withDialog\n} from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nconst Demo = styled('div')`\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 320px;\n  background-color: rgb(255, 255, 255);\n  border: 2px solid rgb(0, 0, 0);\n  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,\n    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;\n  padding: 32px;\n`;\n\nexport default withDialog((props) => {\n  const [visible, { setTrue, setFalse }] = useBoolean();\n\n  return (\n    <div>\n      <Button variant=\"contained\" onClick={() => setTrue()}>\n        Open\n      </Button>\n\n      <Modal\n        visible={visible}\n        onClose={() => setFalse()}\n        BackdropProps={{ transitionDuration: 400 }}\n        autoFocus\n      >\n        <Fade timeout={400}>\n          <Demo>\n            <Typography variant=\"h2\" gutterBottom>\n              \u6a21\u6001\u6846\u6807\u9898\n            </Typography>\n            <Typography gutterBottom style={{ height: 60, overflow: 'auto' }}>\n              \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57,\n              \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57,\n              \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57\n            </Typography>\n            <WhiteSpace />\n            <Space>\n              <Button\n                variant=\"contained\"\n                onClick={() =>\n                  props.dialog.alert({ text: 'Dialog alert message' })\n                }\n              >\n                \u786e\u5b9a\n              </Button>\n              <Button onClick={() => setFalse()} color=\"secondary\">\n                \u53d6\u6d88\n              </Button>\n            </Space>\n          </Demo>\n        </Fade>\n      </Modal>\n    </div>\n  );\n});",
        Be =
          'import {\n  ArrowForward,\n  Button,\n  CloseButton,\n  IconButton,\n  Navbar,\n  Page,\n  Space\n} from \'@wonder-ui/core\';\nimport { Search, ThreeDotsVertical } from \'@wonder-ui/icons\';\n\nexport default () => {\n  return (\n    <Page>\n      <Space direction="vertical" nowrap>\n        <Navbar right={<CloseButton />} />\n\n        <Navbar\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n        />\n\n        <Navbar title="\u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f" />\n\n        <Navbar\n          title="\u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f"\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n        />\n\n        <Navbar\n          title="\u5bfc\u822a\u680f"\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n          right={\n            <IconButton>\n              <ThreeDotsVertical />\n            </IconButton>\n          }\n        />\n\n        <Navbar\n          title="\u5bfc\u822a\u680f"\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n          right={\n            <div>\n              <IconButton>\n                <Search />\n              </IconButton>\n              <IconButton>\n                <ThreeDotsVertical />\n              </IconButton>\n            </div>\n          }\n        />\n\n        <Navbar title="\u5bfc\u822a\u680f" subTitle="\u526f\u6807\u9898" right={<CloseButton />} />\n\n        <Navbar\n          title="\u5bfc\u822a\u680f"\n          subTitle="\u526f\u6807\u9898"\n          left={\n            <Button\n              startIcon={<ArrowForward direction="left" />}\n              variant="text"\n            >\n              \u8fd4\u56de\n            </Button>\n          }\n          right={<Button variant="text">\u5173\u95ed</Button>}\n        />\n      </Space>\n    </Page>\n  );\n};',
        Ae =
          'import { Noticebar, Space, ArrowForward, IconButton } from \'@wonder-ui/core\';\nimport { InfoCircle, CheckCircle, ExclamationCircle } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Space direction="vertical" itemWrap={false}>\n    <Noticebar type="info" icon={<InfoCircle />}>\n      Info (default) Noticebar.\n    </Noticebar>\n    <Noticebar\n      type="warning"\n      icon={<ExclamationCircle />}\n      actions={\n        <IconButton disableRipple>\n          <ArrowForward fontSize="small" />\n        </IconButton>\n      }\n    >\n      Warning Noticebar.\n    </Noticebar>\n    <Noticebar type="error" closable>\n      message...message...message...message...message...message...message...message...message...message...message...message...\n    </Noticebar>\n    <Noticebar type="error" closable scrollable>\n      message...message...message...message...message...message...message...message...message...message...message...message...\n    </Noticebar>\n    <Noticebar icon={<CheckCircle />} type="success" wrap closable>\n      message...message...message...message...message...message...message...message...message...message...message...message...\n    </Noticebar>\n  </Space>\n);',
        Oe =
          'import { Page, Paper, Space, WhiteSpace, styled } from \'@wonder-ui/core\';\n\nconst Block = styled(Paper)`\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: ${({ theme }) => theme.palette.colors.blue.A200};\n`;\n\nexport default () => (\n  <Page>\n    <WhiteSpace />\n    <Space direction="vertical">\n      <Block>Block</Block>\n      <Block>Block</Block>\n      <Block>Block</Block>\n    </Space>\n    <WhiteSpace />\n  </Page>\n);',
        Fe =
          'import { Container, Page, Typography, WhiteSpace } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="\u5bfc\u822a\u680f" showBackButton>\n    <WhiteSpace />\n    <Container>\n      <Typography gutterBottom>\u5e26\u5bfc\u822a\u680f\u7684\u9875\u9762</Typography>\n    </Container>\n  </Page>\n);',
        Ke =
          'import {\n  Button,\n  Container,\n  Drawer,\n  Page,\n  Typography,\n  WhiteSpace\n} from \'@wonder-ui/core\';\nimport { useBoolean } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { setTrue, setFalse }] = useBoolean(false);\n  return (\n    <Page title="\u9875\u9762\u548c\u62bd\u5c49">\n      <WhiteSpace />\n      <Container>\n        <Button variant="contained" onClick={() => setTrue()}>\n          \u6253\u5f00\u62bd\u5c49\n        </Button>\n      </Container>\n\n      <Drawer visible={visible} anchor="bottom" onClose={() => setFalse()}>\n        <Page\n          style={{ width: \'100%\', height: 300 }}\n          title="\u62bd\u5c49"\n          showCloseButton\n          onClose={() => setFalse()}\n        >\n          <Typography gutterBottom>\u62bd\u5c49\u5185\u7684\u9875\u9762</Typography>\n        </Page>\n      </Drawer>\n    </Page>\n  );\n};',
        Ve =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u7ecd\u5174', '\u6e56\u5dde', '\u5609\u5174', '\u91d1\u534e', '\u8862\u5dde'],\n  defaultIndex: 2\n};\n\nexport default () => <Picker {...props} />;",
        je =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: [\n    // \u7b2c\u4e00\u5217\n    {\n      values: ['\u5468\u4e00', '\u5468\u4e8c', '\u5468\u4e09', '\u5468\u56db', '\u5468\u4e94'],\n      defaultIndex: 2\n    },\n    // \u7b2c\u4e8c\u5217\n    {\n      values: ['\u4e0a\u5348', '\u4e0b\u5348', '\u665a\u4e0a'],\n      defaultIndex: 1\n    }\n  ]\n};\n\nexport default () => <Picker {...props} />;",
        Ue =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: [\n    {\n      text: '\u6d59\u6c5f',\n      children: [\n        {\n          text: '\u676d\u5dde',\n          children: [{ text: '\u897f\u6e56\u533a' }, { text: '\u4f59\u676d\u533a' }]\n        },\n        {\n          text: '\u6e29\u5dde',\n          children: [{ text: '\u9e7f\u57ce\u533a' }, { text: '\u74ef\u6d77\u533a' }]\n        }\n      ]\n    },\n    {\n      text: '\u798f\u5efa',\n      children: [\n        {\n          text: '\u798f\u5dde',\n          children: [{ text: '\u9f13\u697c\u533a' }, { text: '\u53f0\u6c5f\u533a' }]\n        },\n        {\n          text: '\u53a6\u95e8',\n          children: [{ text: '\u601d\u660e\u533a' }, { text: '\u6d77\u6ca7\u533a' }]\n        }\n      ]\n    }\n  ]\n};\n\nexport default () => <Picker {...props} />;",
        Ge =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: [\n    { text: '\u676d\u5dde', disabled: true },\n    { text: '\u5b81\u6ce2' },\n    { text: '\u6e29\u5dde' }\n  ],\n  defaultIndex: 2\n};\n\nexport default () => <Picker {...props} />;",
        ze =
          "import * as React from 'react';\nimport { Picker, PickerProps, PickerAction } from '@wonder-ui/core';\n\nconst cities = {\n  \u6d59\u6c5f: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u5609\u5174', '\u6e56\u5dde'],\n  \u798f\u5efa: ['\u798f\u5dde', '\u53a6\u95e8', '\u8386\u7530', '\u4e09\u660e', '\u6cc9\u5dde']\n};\n\nconst props: PickerProps = {\n  columns: [{ values: Object.keys(cities) }, { values: cities['\u6d59\u6c5f'] }]\n};\n\nexport default () => {\n  const actionRef = React.useRef<PickerAction>(null);\n\n  const onChange = (values: (keyof typeof cities)[]) => {\n    actionRef.current?.setColumnValues(1, cities[values[0]]);\n  };\n\n  return <Picker actionRef={actionRef} onChange={onChange} {...props} />;\n};",
        We =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u7ecd\u5174', '\u6e56\u5dde', '\u5609\u5174', '\u91d1\u534e', '\u8862\u5dde'],\n  defaultIndex: 2,\n  loading: true\n};\n\nexport default () => <Picker {...props} />;",
        Ne =
          "import {\n  Drawer,\n  Picker,\n  PickerProps,\n  Page,\n  List,\n  ListInputItem,\n  ListHeader\n} from '@wonder-ui/core';\nimport { useReactive } from '@wonder-ui/hooks';\n\nconst props: PickerProps = {\n  columns: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u7ecd\u5174', '\u6e56\u5dde', '\u5609\u5174', '\u91d1\u534e', '\u8862\u5dde'],\n  defaultIndex: 2\n};\n\nexport default () => {\n  const state = useReactive({ visible: false, value: '' });\n\n  return (\n    <Page>\n      <List>\n        <ListHeader>\u8868\u5355</ListHeader>\n        <ListInputItem\n          button\n          label=\"\u57ce\u5e02\"\n          readOnly\n          placeholder=\"\u9009\u62e9\u57ce\u5e02\"\n          value={state.value}\n          onClick={() => {\n            state.visible = true;\n          }}\n        />\n      </List>\n      <Drawer\n        keepMounted\n        anchor=\"bottom\"\n        visible={state.visible}\n        onClose={() => {\n          state.visible = false;\n        }}\n      >\n        <Picker\n          onConfirm={(value: string) => {\n            state.visible = false;\n            state.value = value;\n          }}\n          onCancel={() => {\n            state.visible = false;\n          }}\n          {...props}\n        />\n      </Drawer>\n    </Page>\n  );\n};",
        _e =
          "import {\n  Picker,\n  PickerAction,\n  Page,\n  Paper,\n  List,\n  ListInputItem,\n  ListHeader,\n  Popup,\n  styled\n} from '@wonder-ui/core';\nimport { useReactive } from '@wonder-ui/hooks';\nimport { getPCA, CascadeData } from 'lcn';\nimport * as React from 'react';\n\nconst pca = getPCA();\n\nconst PickWrap = styled(Paper)`\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & > div {\n    width: 100%;\n  }\n`;\n\nexport default () => {\n  const state = useReactive({ visible: false, value: '', valueCode: '' });\n\n  const pickActionRef = React.useRef<PickerAction>(null);\n\n  return (\n    <Page>\n      <List>\n        <ListHeader>\u5730\u5740\u9009\u62e9\u5668</ListHeader>\n        <ListInputItem\n          button\n          label=\"\u57ce\u5e02\"\n          readOnly\n          placeholder=\"\u9009\u62e9\u7701\u5e02\u533a\"\n          value={state.value}\n          onClick={() => {\n            state.visible = true;\n          }}\n        />\n      </List>\n      <Popup\n        keepMounted\n        visible={state.visible}\n        title=\"\u7701\u5e02\u533a\"\n        onClose={() => {\n          state.visible = false;\n          pickActionRef.current?.confirm();\n        }}\n      >\n        <PickWrap>\n          <Picker\n            actionRef={pickActionRef}\n            textKey=\"name\"\n            columns={pca}\n            visibleItemCount={11}\n            showNavbar={false}\n            onConfirm={(values: CascadeData[]) => {\n              state.value = values.map((item) => item.name).join('/');\n              state.valueCode = values.map((item) => item.code).join(',');\n            }}\n          />\n        </PickWrap>\n      </Popup>\n    </Page>\n  );\n};",
        qe =
          "import * as React from 'react';\nimport { Button, Popover } from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, actions] = useBoolean(false);\n  const buttonRef = React.useRef<HTMLElement>(null);\n\n  return (\n    <div>\n      <Button variant=\"contained\" ref={buttonRef} onClick={actions.setTrue}>\n        \u5f39\u51fa\u6846\n      </Button>\n\n      <Popover\n        visible={visible}\n        anchorEl={() => buttonRef.current}\n        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}\n        onClose={() => actions.setFalse()}\n      >\n        <div style={{ padding: 16 }}>\n          \u6c14\u6ce1\u5361\u7247\u5185\u5bb9... <Button>\u66f4\u591a</Button>\n        </div>\n      </Popover>\n    </div>\n  );\n};",
        Ye =
          "import * as React from 'react';\nimport { Button, Container, Popup, Typography } from '@wonder-ui/core';\n\nexport default () => {\n  const [popVisible, setVisible] = React.useState(false);\n  return (\n    <div>\n      <Container>\n        <Button variant=\"contained\" onClick={() => setVisible(true)}>\n          \u6253\u5f00\u5f39\u7a97\n        </Button>\n      </Container>\n\n      <Popup\n        title=\"Popup Title\"\n        visible={popVisible}\n        onClose={() => setVisible(false)}\n      >\n        <div style={{ padding: '30px  16px' }}>\n          <Typography gutterBottom>\n            \u5f39\u51fa\u7a97\u53e3\u6765\u4e86\u3002\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u653e\u7f6e\u4efb\u4f55\u5185\u5bb9\uff0c\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528\u5176\u81ea\u5df1\u7684\u72ec\u7acb\u89c6\u56fe\u5bfc\u822a\u3002\u4e5f\u4e0d\u662f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\n            iPhone / iPod \u548c iPad \u4e0a\u770b\u8d77\u6765\u6709\u70b9\u4e0d\u540c\u7684\u5f39\u51fa\u7a97\u53e3\uff0ciPhone\n            \u5b83\u662f\u5168\u5c4f\u7684\u3002\n          </Typography>\n\n          <Typography>...</Typography>\n        </div>\n      </Popup>\n    </div>\n  );\n};",
        $e =
          "import * as React from 'react';\nimport { Button, Portal } from '@wonder-ui/core';\nimport { useToggle } from '@wonder-ui/hooks';\n\nexport default () => {\n  const target = React.useRef(null);\n  const [visible, { toggle }] = useToggle(false);\n\n  return (\n    <div>\n      <Button variant=\"contained\" onClick={() => toggle()}>\n        Toggle\n      </Button>\n\n      <div style={{ backgroundColor: 'grey' }}>\n        {visible && (\n          <Portal container={() => target.current}>\n            <div>Portal Content</div>\n          </Portal>\n        )}\n      </div>\n\n      <div ref={target} style={{ backgroundColor: 'pink' }}></div>\n    </div>\n  );\n};",
        Ze =
          'import { Button, Container, Preloader } from \'@wonder-ui/core\';\nimport { useToggle } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { toggle }] = useToggle(false);\n\n  const open = () => {\n    toggle();\n\n    setTimeout(() => {\n      toggle();\n    }, 2000);\n  };\n\n  return (\n    <Container>\n      <Button variant="contained" onClick={() => open()}>\n        Open\n      </Button>\n      <Preloader visible={visible} text="\u52a0\u8f7d\u4e2d..." />\n    </Container>\n  );\n};',
        Xe =
          'import { Button, Preloader } from \'@wonder-ui/core\';\n\nconst loadData = () =>\n  new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({});\n    }, 2000);\n  });\n\nexport default () => (\n  <Preloader onLoad={loadData}>\n    <Button variant="contained">Onload</Button>\n  </Preloader>\n);',
        Je =
          'import { Button, showPreloader, hidePreloader } from \'@wonder-ui/core\';\n\nexport default () => {\n  const open = () => {\n    showPreloader();\n    setTimeout(() => {\n      hidePreloader();\n    }, 2000);\n  };\n\n  return (\n    <Button variant="contained" onClick={() => open()}>\n      Open\n    </Button>\n  );\n};',
        Qe =
          "import {\n  Button,\n  showPreloader,\n  hidePreloader,\n  Space,\n  LinearProgress,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\n\nexport default () => {\n  const open = (type: 'spinner' | 'circular' | 'custom') => {\n    if (type === 'spinner' || type === 'circular') {\n      showPreloader({\n        type,\n        text: `type - ${type}`\n      });\n    } else {\n      showPreloader({\n        indicator: (\n          <div style={{ width: 200, paddingTop: 20 }}>\n            <LinearProgress />\n            <WhiteSpace />\n            <Typography>\u52a0\u8f7d\u4e2d...</Typography>\n          </div>\n        )\n      });\n    }\n\n    setTimeout(() => {\n      hidePreloader();\n    }, 2000);\n  };\n\n  return (\n    <Space>\n      <Button variant=\"contained\" onClick={() => open('spinner')}>\n        Open(spinner)\n      </Button>\n\n      <Button variant=\"contained\" onClick={() => open('circular')}>\n        Open(circular)\n      </Button>\n\n      <Button variant=\"contained\" onClick={() => open('custom')}>\n        Open(custom)\n      </Button>\n    </Space>\n  );\n};",
        et =
          "import {\n  Page,\n  PullRefresh,\n  WhiteSpace,\n  Checkbox,\n  Container,\n  withDialog\n} from '@wonder-ui/core';\nimport * as React from 'react';\n\nexport default withDialog((props) => {\n  const [loading, setLoading] = React.useState(false);\n  const [needDialog, setDialogState] = React.useState(true);\n\n  return (\n    <Page title=\"PullRefresh\">\n      <PullRefresh\n        refreshing={loading}\n        loadingText=\"\u52a0\u8f7d\u4e2d\"\n        pullingText=\"\u4e0b\u62c9\u5373\u53ef\u5237\u65b0\"\n        loosingText=\"\u65bd\u653e\u5373\u53ef\u5237\u65b0\"\n        successText={needDialog ? '' : '\u52a0\u8f7d\u6210\u529f'}\n        onRefresh={() => {\n          setLoading(true);\n          setTimeout(() => {\n            setLoading(false);\n            if (needDialog) {\n              props.dialog.toast('\u52a0\u8f7d\u6210\u529f');\n            }\n          }, 2000);\n        }}\n      >\n        <Container>\n          <WhiteSpace />\n          <Checkbox\n            checked={needDialog}\n            onChange={(e) => {\n              setDialogState(e.target.checked);\n            }}\n          >\n            Toast \u63d0\u793a\n          </Checkbox>\n\n          <div style={{ paddingTop: 1500 }}>\u5e95\u90e8</div>\n        </Container>\n      </PullRefresh>\n    </Page>\n  );\n});",
        tt =
          'import { Page, PullRefresh, WhiteSpace, Container } from \'@wonder-ui/core\';\nimport * as React from \'react\';\n\nexport default () => {\n  const [loading, setLoading] = React.useState(false);\n\n  return (\n    <Page title="\u81ea\u5b9a\u4e49">\n      <PullRefresh\n        refreshing={loading}\n        loadingText="\u52a0\u8f7d\u4e2d"\n        pullingText="\u4e0b\u62c9\u5373\u53ef\u5237\u65b0"\n        loosingText="\u65bd\u653e\u5373\u53ef\u5237\u65b0"\n        successText={\'\u52a0\u8f7d\u6210\u529f\'}\n        slots={{\n          pulling: (props) => (\n            <img\n              src="https://img01.yzcdn.cn/vant/doge.png"\n              style={{ transform: `scale(${props.distance / 80})`, width: 180 }}\n            />\n          ),\n          loosing: () => (\n            <img\n              src="https://img01.yzcdn.cn/vant/doge.png"\n              style={{ width: 120 }}\n            />\n          ),\n          loading: () => (\n            <img\n              src="https://img01.yzcdn.cn/vant/doge-fire.jpg"\n              style={{ width: 120 }}\n            />\n          )\n        }}\n        onRefresh={() => {\n          setLoading(true);\n          setTimeout(() => {\n            setLoading(false);\n          }, 2000);\n        }}\n      >\n        <Container>\n          <WhiteSpace />\n          \u63d0\u793a\n        </Container>\n      </PullRefresh>\n    </Page>\n  );\n};',
        nt =
          'import { Radio, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Space>\n      <Radio name="radio-demo">Primary</Radio>\n      <Radio name="radio-demo" color="secondary">\n        Secondary\n      </Radio>\n    </Space>\n    <Space>\n      <Radio name="radio-demo" disabled>\n        Primary\n      </Radio>\n      <Radio name="radio-demo" color="secondary" disabled>\n        Secondary\n      </Radio>\n    </Space>\n  </Space>\n);',
        it =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row>\n      <Col>\n        <Block>1 of 2</Block>\n      </Col>\n      <Col>\n        <Block>2 of 2</Block>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        rt =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={4}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row rowCols={5}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n\n    <Row rowCols={3}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        at =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={{ sm: 2, md: 1, lg: 5 }}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n\n    <Row>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        ot =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols=\"auto\">\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        dt =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={6}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row rowCols={3}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        lt =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={6}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col col={4}>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row rowCols={6}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col offset={2}>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        st =
          'import { Navbar, Page, Searchbar, WhiteSpace } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page\n    title="\u641c\u7d22"\n    NavbarProps={{\n      children: <Searchbar placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57" allowCancel />\n    }}\n    //\u53ea\u5c55\u793a\u641c\u7d22\u6761\n    // navbar={\n    //   <Searchbar\n    //     placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57"\n    //     allowCancel\n    //     style={{ position: \'absolute\', top: 0 }}\n    //   />\n    // }\n  >\n    <WhiteSpace />\n\n    <Navbar title="navbar & search">\n      <Searchbar placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57" allowCancel />\n    </Navbar>\n\n    <WhiteSpace />\n\n    <Searchbar placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57" allowCancel fixCancelButton />\n  </Page>\n);',
        pt =
          "import * as React from 'react';\nimport {\n  Button,\n  Drawer,\n  Page,\n  Searchbar,\n  Typography,\n  Space\n} from '@wonder-ui/core';\nimport { Search } from '@wonder-ui/icons';\n\nexport default () => {\n  const [DrawerVisible, setDrawerVisible] = React.useState(false);\n\n  return (\n    <Page\n      navbar={\n        <Searchbar\n          style={{ position: 'absolute', top: 0 }}\n          icon={\n            <Space style={{ color: '#777' }} gap={3} verticalAlign=\"center\">\n              \u5730\u5740\n              <Search style={{ fontSize: '0.8rem' }} />\n            </Space>\n          }\n          placeholder=\"\u8bf7\u8f93\u5165\u5730\u5740\"\n          barRight={\n            <Button\n              style={{ whiteSpace: 'nowrap', marginRight: -12 }}\n              onClick={() => {\n                setDrawerVisible(true);\n              }}\n            >\n              \u7b5b\u9009\n            </Button>\n          }\n        />\n      }\n    >\n      <Typography style={{ padding: 12 }}>\u70b9\u51fb\u7b5b\u9009\u5c55\u5f00\u9762\u677f</Typography>\n      <Drawer\n        anchor=\"right\"\n        visible={DrawerVisible}\n        onClose={() => {\n          setDrawerVisible(false);\n        }}\n      >\n        <Page title=\"\u7b5b\u9009\" style={{ width: 200 }}>\n          \u7b5b\u9009\u9762\u677f\n        </Page>\n      </Drawer>\n    </Page>\n  );\n};",
        ct =
          'import { ArrowClockwise, Share } from \'@wonder-ui/icons\';\nimport {\n  ArrowForward,\n  IconButton,\n  Searchbar,\n  Space,\n  styled\n} from \'@wonder-ui/core\';\n\nconst MySearch = styled(Searchbar)`\n  .WuiSearchbar-bg {\n    background-color: rgb(79, 192, 141);\n  }\n  .WuiSvgIcon-root {\n    color: #fff;\n  }\n  .WuiSearchbar-input {\n    border-radius: 999px;\n  }\n`;\n\nexport default () => {\n  return (\n    <MySearch\n      InputProps={{\n        readOnly: true,\n        onClick: () => alert(\'Link to Search Page\')\n      }}\n      placeholder="\u70b9\u51fb\u8df3\u8f6c\u641c\u7d22\u9875"\n      barRight={\n        <Space nowrap gap={0}>\n          <IconButton>\n            <Share fontSize="small" />\n          </IconButton>\n\n          <IconButton edge="end">\n            <ArrowClockwise fontSize="small" />\n          </IconButton>\n        </Space>\n      }\n      barLeft={\n        <IconButton edge="start">\n          <ArrowForward direction="left" fontSize="small" />\n        </IconButton>\n      }\n    />\n  );\n};',
        ut =
          "import { Page, Paper, Skeleton } from '@wonder-ui/core';\n\nexport default () => (\n  <Page title=\"Skeleton\">\n    <Paper style={{ padding: '20px 0' }}>\n      <Skeleton title />\n      <Skeleton title />\n      <Skeleton title />\n    </Paper>\n  </Page>\n);",
        ft =
          "import { Page, Paper, Skeleton, Divider } from '@wonder-ui/core';\n\nexport default () => (\n  <Page title=\"Skeleton with avatar\">\n    <Paper style={{ padding: '20px 0' }}>\n      <Skeleton title avatar />\n      <Skeleton title avatar />\n      <Skeleton title avatar />\n    </Paper>\n  </Page>\n);",
        mt =
          'import { Button, Snackbar } from \'@wonder-ui/core\';\nimport { useToggle } from \'@wonder-ui/hooks\';\n\nexport default function Example() {\n  const [visible, { toggle }] = useToggle();\n\n  return (\n    <div>\n      <Button variant="contained" onClick={() => toggle()}>\n        \u7b80\u5355\u7684\u6d88\u606f\u6761\n      </Button>\n      <Snackbar\n        visible={visible}\n        message="\u7b80\u5355\u7684\u6d88\u606f\u6761"\n        autoHideDuration={3000}\n        onClose={() => toggle()}\n      />\n    </div>\n  );\n}',
        yt =
          "import * as React from 'react';\nimport { Button, Snackbar, SnackbarProps, Space } from '@wonder-ui/core';\n\nexport default function Example() {\n  const [state, setState] = React.useState<Partial<SnackbarProps>>({\n    visible: false,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  });\n\n  const { anchorOrigin = {}, visible } = state;\n\n  const handleClick = (newState: any) => () => {\n    setState({ visible: true, ...newState });\n  };\n\n  const handleClose = () => {\n    setState({ ...state, visible: false });\n  };\n\n  return (\n    <div>\n      <Space>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'top',\n              horizontal: 'left'\n            }\n          })}\n        >\n          \u5de6\u4e0a\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'top',\n              horizontal: 'center'\n            }\n          })}\n        >\n          \u4e2d\u4e0a\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'top',\n              horizontal: 'right'\n            }\n          })}\n        >\n          \u53f3\u4e0a\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'bottom',\n              horizontal: 'right'\n            }\n          })}\n        >\n          \u53f3\u4e0b\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'bottom',\n              horizontal: 'center'\n            }\n          })}\n        >\n          \u4e2d\u4e0b\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'bottom',\n              horizontal: 'left'\n            }\n          })}\n        >\n          \u5de6\u4e0b\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'center',\n              horizontal: 'center'\n            }\n          })}\n        >\n          \u4e2d\n        </Button>\n      </Space>\n\n      <Snackbar\n        visible={visible}\n        message=\"\u7b80\u5355\u7684\u6d88\u606f\u6761\"\n        autoHideDuration={null}\n        anchorOrigin={anchorOrigin}\n        onClose={handleClose}\n        key={anchorOrigin.vertical + anchorOrigin.horizontal!}\n      />\n    </div>\n  );\n}",
        Et =
          "import { Button, withDialog } from '@wonder-ui/core';\n\nexport default withDialog((props) => {\n  const { dialog } = props;\n\n  return (\n    <Button\n      variant=\"contained\"\n      onClick={() => {\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f');\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f.');\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f..');\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f...');\n      }}\n    >\n      toast\n    </Button>\n  );\n});",
        vt =
          'import { Space, Button } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    \u95f4\u8ddd:\n    <Button variant="contained">Button</Button>\n    <Button variant="contained">Button</Button>\n  </Space>\n);',
        Ht =
          "import { Divider, Space, Typography } from '@wonder-ui/core';\n\nexport default () => (\n  <Space split={<Divider direction=\"vertical\" style={{ height: '1em' }} />}>\n    <Typography>text</Typography>\n    <Typography>text</Typography>\n    <Typography>text</Typography>\n  </Space>\n);",
        ht =
          "import { Space, Button } from '@wonder-ui/core';\n\nexport default () => (\n  <Space size={['small', 'large']}>\n    {new Array(22).fill(null).map((_, index) => (\n      <Button variant=\"contained\" key={index}>\n        Button\n      </Button>\n    ))}\n  </Space>\n);",
        gt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    Start:\n    <SpaceDemo horizontalAlign="start">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Center:\n    <SpaceDemo horizontalAlign="center">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    End:\n    <SpaceDemo horizontalAlign="end">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Space around:\n    <SpaceDemo horizontalAlign="space-around">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Space between:\n    <SpaceDemo horizontalAlign="space-between">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Space evenly:\n    <SpaceDemo horizontalAlign="space-evenly">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n  </Space>\n);',
        Mt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n  height: 100px;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    <div>Top:</div>\n    <SpaceDemo verticalAlign="start">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Center:\n    <SpaceDemo verticalAlign="center">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Bottom:\n    <SpaceDemo verticalAlign="end">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n  </Space>\n);',
        bt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    Start:\n    <SpaceDemo direction="vertical" horizontalAlign="start">\n      <Box>1</Box>\n      <Box>2</Box>\n    </SpaceDemo>\n    <div>Center:</div>\n    <SpaceDemo direction="vertical" horizontalAlign="center">\n      <Box>1</Box>\n      <Box>2</Box>\n    </SpaceDemo>\n    End:\n    <SpaceDemo direction="vertical" horizontalAlign="end">\n      <Box>1</Box>\n      <Box>2</Box>\n    </SpaceDemo>\n  </Space>\n);',
        Lt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n  height: 100px;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    Start:\n    <SpaceDemo direction="vertical" verticalAlign="start">\n      <Box>1</Box>\n    </SpaceDemo>\n    <div>Center:</div>\n    <SpaceDemo direction="vertical" verticalAlign="center">\n      <Box>1</Box>\n    </SpaceDemo>\n    End:\n    <SpaceDemo direction="vertical" verticalAlign="end">\n      <Box>1</Box>\n    </SpaceDemo>\n  </Space>\n);',
        Tt =
          'import { List, ListItem, ListItemText, Page, Stepper } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Stepper">\n    <List>\n      <ListItem divider extra={<Stepper />}>\n        <ListItemText>\u9ed8\u8ba4</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper step={3} />}>\n        <ListItemText>\u6b65\u957f\u8bbe\u7f6e</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper min={1} max={8} />}>\n        <ListItemText>\u9650\u5236\u8f93\u5165\u8303\u56f4</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper step={1} min={1} />}>\n        <ListItemText>\u9650\u5236\u8f93\u5165\u6574\u6570</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper disabled />}>\n        <ListItemText>\u7981\u7528\u72b6\u6001</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper disableInput />}>\n        <ListItemText>\u7981\u7528\u8f93\u5165\u6846</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper step={0.1} min={1} />}>\n        <ListItemText>\u56fa\u5b9a\u5c0f\u6570\u4f4d\u6570</ListItemText>\n      </ListItem>\n      <ListItem extra={<Stepper hideInput />}>\n        <ListItemText>\u9690\u85cf\u8f93\u5165\u6846</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);',
        Ct =
          "import * as React from 'react';\nimport { Badge, Space, Stepper, styled } from '@wonder-ui/core';\n\nconst sizeValues = { sm: 20, md: 30, lg: 40 };\n\ntype SizeKey = keyof typeof sizeValues;\n\nconst UIStepper = styled(Stepper)<{ size?: SizeKey }>`\n  .WuiStepper-button {\n    border-radius: 50%;\n    background-color: ${({ theme }) => theme.palette.primary.main};\n    color: #fff;\n    width: ${({ size = 'md' }) => sizeValues[size] + 'px'};\n    height: ${({ size = 'md' }) => sizeValues[size] + 'px'};\n  }\n  .WuiStepper-input {\n    height: ${({ size = 'md' }) => sizeValues[size] + 'px'};\n  }\n\n  .WuiStepper-minus {\n    background-color: ${({ theme }) => theme.palette.secondary.main};\n  }\n\n  .WuiStepper-input {\n    background-color: transparent;\n  }\n`;\n\nexport default () => {\n  const [value, setValue] = React.useState(0);\n  const [value2, setValue2] = React.useState(0);\n  return (\n    <Space gap={20} direction=\"vertical\">\n      <UIStepper\n        size=\"sm\"\n        value={value}\n        hideInput={value === 0}\n        hideMinusButton={value === 0}\n        onChange={(val) => {\n          setValue(val);\n        }}\n      />\n\n      <Badge text={value2} color=\"danger\" hideContent={value2 == 0}>\n        <UIStepper\n          value={value2}\n          hideInput\n          hideMinusButton\n          onChange={(val) => {\n            setValue2(val);\n          }}\n        />\n      </Badge>\n\n      <Badge text={value2} color=\"danger\" hideContent={value2 == 0}>\n        <UIStepper\n          size=\"lg\"\n          value={value2}\n          hideInput\n          hideMinusButton\n          onChange={(val) => {\n            setValue2(val);\n          }}\n        />\n      </Badge>\n    </Space>\n  );\n};",
        Dt =
          'import { Button, Sticky } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Sticky offsetTop={50}>\n    <Button variant="contained">\u57fa\u672c\u4f7f\u7528</Button>\n  </Sticky>\n);',
        wt =
          'import { Button, Sticky } from \'@wonder-ui/core\';\n\nexport default () => (\n  <div style={{ marginLeft: 100 }}>\n    <Sticky offsetTop={64}>\n      <Button variant="contained">\u5438\u9876\u8ddd\u79bb</Button>\n    </Sticky>\n  </div>\n);',
        It =
          "import { Button, Sticky, styled } from '@wonder-ui/core';\nimport * as React from 'react';\n\nconst Box = styled('div')`\n  border: 1px solid blue;\n  padding-left: 200px;\n  height: 150px;\n`;\n\nexport default () => {\n  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);\n\n  return (\n    <Box\n      ref={(node) => {\n        setContainer(node);\n      }}\n    >\n      <Sticky container={container} offsetTop={64} zIndex={30}>\n        <Button variant=\"contained\">\u6307\u5b9a\u5bb9\u5668</Button>\n      </Sticky>\n    </Box>\n  );\n};",
        xt =
          'import { SvgIcon, SvgIconProps, styled } from \'@wonder-ui/core\';\n\nconst IconStoreRoot = styled(SvgIcon)<SvgIconProps>(({ theme }) => ({\n  color: theme.palette.colors.blue.A200\n}));\n\nexport default () => (\n  <IconStoreRoot fontSize="large" titleAccess="store" viewBox="0 0 24 24">\n    <path d="M19 4a2 2 0 012 2v4a2 2 0 01-.999 1.732L20 19h1a1 1 0 010 2H3a1 1 0 010-2h1v-7.268A2 2 0 013 10V6a2 2 0 012-2h14zm-1 8H6v7h2.5v-4a1 1 0 011-1h5a1 1 0 011 1v4H18v-7zm-4.5 4h-3v3h3v-3zM19 6H5v4h14V6z" />\n  </IconStoreRoot>\n);',
        Pt =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nexport default () => {\n  return (\n    <Swipe autoplay>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        Rt =
          "import { Swipe, styled } from '@wonder-ui/core';\nimport { useMount } from '@wonder-ui/hooks';\n\nconst ImageNode = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nconst Image = (props: any) => {\n  useMount(() => {\n    console.log('Mouned');\n  });\n\n  return <ImageNode>{props.children}</ImageNode>;\n};\n\nexport default () => {\n  return (\n    <Swipe loop={false}>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n      <Image>4</Image>\n      <Image>5</Image>\n      <Image>6</Image>\n    </Swipe>\n  );\n};",
        St =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nexport default () => {\n  return (\n    <Swipe autoplay vertical style={{ height: 200 }}>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        kt =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n\n  .WuiSwipe-item:nth-child(even) & {\n    background-color: #39ed81;\n  }\n`;\n\nexport default () => {\n  return (\n    <Swipe loop={false} width={260}>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        Bt =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nconst Indicator = styled('div')`\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  right: 0;\n  padding: 6px 12px;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.1);\n  font-size: 12px;\n`;\n\nexport default () => {\n  return (\n    <Swipe\n      autoplay\n      onRenderIndicator={(activeIndex) => (\n        <Indicator>{activeIndex + 1}/3</Indicator>\n      )}\n    >\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        At =
          "import * as React from 'react';\nimport {\n  TabContext,\n  TabPane,\n  Typography,\n  Divider,\n  Tab,\n  Tabs,\n  styled\n} from '@wonder-ui/core';\n\nconst Content = styled('div')`\n  padding: 16px;\n`;\n\nexport default () => {\n  const [value, setValue] = React.useState(1);\n\n  return (\n    <TabContext value={value}>\n      <Tabs>\n        <Tab>Item-1</Tab>\n        <Tab>Item-2</Tab>\n        <Tab>Item-3</Tab>\n      </Tabs>\n      <Divider />\n\n      <TabPane value={1}>\n        <Content>\n          <Typography>Content of Tab Pane 1</Typography>\n        </Content>\n      </TabPane>\n      <TabPane value={2}>\n        <Content>\n          <Typography>Content of Tab Pane 2</Typography>\n        </Content>\n      </TabPane>\n      <TabPane value={3}>\n        <Content>\n          <Typography>Content of Tab Pane 3</Typography>\n        </Content>\n      </TabPane>\n    </TabContext>\n  );\n};",
        Ot =
          "import * as React from 'react';\nimport {\n  TabContext,\n  TabPane,\n  Button,\n  ButtonGroup,\n  WhiteSpace\n} from '@wonder-ui/core';\n\n// import Tab from '../Tab';\n// import Tabs from '../Tabs';\n\nexport default () => {\n  const [value, setValue] = React.useState(1);\n\n  return (\n    <div>\n      <ButtonGroup>\n        <Button onClick={() => setValue(1)} checked={value === 1}>\n          Item 1\n        </Button>\n        <Button onClick={() => setValue(2)} checked={value === 2}>\n          Item 2\n        </Button>\n        <Button onClick={() => setValue(3)} checked={value === 3}>\n          Item 3\n        </Button>\n      </ButtonGroup>\n      <WhiteSpace />\n      <TabContext value={value}>\n        <TabPane value={1}>Content of Tab Pane 1</TabPane>\n        <TabPane value={2}>Content of Tab Pane 2</TabPane>\n        <TabPane value={3}>Content of Tab Pane 3</TabPane>\n      </TabContext>\n    </div>\n  );\n};",
        Ft =
          "import * as React from 'react';\nimport {\n  TabContext,\n  TabPane,\n  Button,\n  ButtonGroup,\n  WhiteSpace\n} from '@wonder-ui/core';\n\nexport default () => {\n  const [value, setValue] = React.useState(1);\n\n  return (\n    <div>\n      <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n        <Button onClick={() => setValue(1)} checked={value === 1}>\n          Item 1\n        </Button>\n        <Button onClick={() => setValue(2)} checked={value === 2}>\n          Item 2\n        </Button>\n        <Button onClick={() => setValue(3)} checked={value === 3}>\n          Item 3\n        </Button>\n      </ButtonGroup>\n      <WhiteSpace />\n      <TabContext value={value}>\n        <TabPane value={1}>Content of Tab Pane 1</TabPane>\n        <TabPane value={2}>Content of Tab Pane 2</TabPane>\n        <TabPane value={3}>Content of Tab Pane 3</TabPane>\n      </TabContext>\n    </div>\n  );\n};",
        Kt =
          'import { Space, Tag } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Tag>Default</Tag>\n    <Tag color="primary">Primary</Tag>\n    <Tag color="secondary">Secondary</Tag>\n    <Tag color="success">Success</Tag>\n    <Tag color="danger">Danger</Tag>\n    <Tag color="warning">Warning</Tag>\n    <Tag color="info">Info</Tag>\n\n    <Tag color="primary" variant="contained">\n      Primary\n    </Tag>\n    <Tag color="secondary" variant="contained">\n      Secondary\n    </Tag>\n    <Tag color="success" variant="contained">\n      Success\n    </Tag>\n    <Tag color="danger" variant="contained">\n      Danger\n    </Tag>\n    <Tag color="warning" variant="contained">\n      Warning\n    </Tag>\n    <Tag color="info" variant="contained">\n      Info\n    </Tag>\n  </Space>\n);',
        Vt =
          "import { Button, Space, Tag } from '@wonder-ui/core';\nimport { useSelections } from '@wonder-ui/hooks';\nimport { createArray } from '@wonder-ui/utils';\n\nconst tags = createArray(7, (index) => index);\n\nexport default function Example() {\n  const { selected, toggle, selectAll } = useSelections(tags, tags);\n\n  return (\n    <Space direction=\"vertical\">\n      <Button variant=\"contained\" onClick={selectAll}>\n        Reset\n      </Button>\n\n      <Space>\n        {selected.map((tag, index) => (\n          <Tag closable key={index} onClose={() => toggle(tag)}>\n            Tag {tag}\n          </Tag>\n        ))}\n      </Space>\n    </Space>\n  );\n}",
        jt =
          "import { Space, CheckableTag } from '@wonder-ui/core';\nimport { useSelections } from '@wonder-ui/hooks';\n\nconst tags = ['Movies', 'Books', 'Music', 'Sports'];\n\nexport default () => {\n  const { selected, unSelect, isSelected, select } = useSelections(tags);\n\n  return (\n    <Space direction=\"vertical\">\n      <div>Selected: {selected.join(',')}</div>\n      <Space>\n        <div>Categories:</div>\n        {tags.map((tag, index) => (\n          <CheckableTag\n            key={index}\n            checked={isSelected(tag)}\n            onChange={(checked) => {\n              if (checked) {\n                select(tag);\n              } else {\n                unSelect(tag);\n              }\n            }}\n          >\n            {tag}\n          </CheckableTag>\n        ))}\n      </Space>\n    </Space>\n  );\n};",
        Ut =
          'import { Space, Toggle, Container } from \'@wonder-ui/core\';\n\nexport default function Example() {\n  return (\n    <Container>\n      <Space direction="vertical">\n        <Space>\n          <Toggle defaultChecked />\n          <Toggle defaultChecked color="secondary" />\n          <Toggle defaultChecked color="danger" />\n          <Toggle defaultChecked color="warning" />\n          <Toggle defaultChecked color="info" />\n        </Space>\n\n        <Space>\n          <Toggle disabled defaultChecked />\n          <Toggle disabled defaultChecked color="secondary" />\n          <Toggle disabled defaultChecked color="danger" />\n          <Toggle disabled defaultChecked color="warning" />\n          <Toggle disabled defaultChecked color="info" />\n        </Space>\n      </Space>\n    </Container>\n  );\n}',
        Gt =
          'import { Container, Space, Toggle } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Container>\n    <Space>\n      <Toggle />\n      <Toggle size="small" />\n    </Space>\n  </Container>\n);',
        zt =
          'import { Container, Toggle, Space, useTheme } from \'@wonder-ui/core\';\nimport {\n  ToggleOff,\n  ToggleOn,\n  CheckCircle,\n  CheckCircleFill,\n  CheckSquare,\n  CheckSquareFill\n} from \'@wonder-ui/icons\';\n\nexport default () => {\n  const theme = useTheme();\n  return (\n    <Container>\n      <Space>\n        <Toggle\n          style={{ color: theme.palette.colors.blue[300] }}\n          icon={<ToggleOff fontSize="large" />}\n          checkedIcon={<ToggleOn fontSize="large" />}\n        />\n        <Toggle\n          style={{ color: theme.palette.colors.pink[400] }}\n          icon={<CheckCircle />}\n          checkedIcon={<CheckCircleFill />}\n        />\n        <Toggle\n          style={{ color: theme.palette.colors.orange[600] }}\n          icon={<CheckSquare />}\n          checkedIcon={<CheckSquareFill />}\n        />\n      </Space>\n    </Container>\n  );\n};',
        Wt =
          'import { Button, Space, Tooltip, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Tooltip title="Button tooltip text">\n      <Button variant="contained">\u6309\u94ae\u63d0\u793a</Button>\n    </Tooltip>\n    <Tooltip title="Button tooltip text" arrow placement="auto">\n      <Button variant="contained">\u6309\u94ae\u63d0\u793a(arrow)</Button>\n    </Tooltip>\n  </Space>\n);',
        Nt =
          'import { Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <div>\n    <Typography variant="h1" gutterBottom>\n      h1.Heading\n    </Typography>\n    <Typography variant="h2" gutterBottom>\n      h2.Heading\n    </Typography>\n    <Typography variant="h3" gutterBottom>\n      h3.Heading\n    </Typography>\n    <Typography variant="h4" gutterBottom>\n      h4.Heading\n    </Typography>\n    <Typography variant="h5" gutterBottom>\n      h5.Heading\n    </Typography>\n    <Typography variant="h6" gutterBottom>\n      h6.Heading\n    </Typography>\n\n    <Typography variant="subtitle1">\n      subtitle1.Subtitle Subtitle Subtitle Subtitle\n    </Typography>\n    <Typography variant="subtitle2">\n      subtitle2.Subtitle Subtitle Subtitle Subtitle\n    </Typography>\n\n    <Typography variant="body1">body1.Text Text Text Text</Typography>\n    <Typography variant="body2">body2.Text Text Text Text</Typography>\n  </div>\n);',
        _t =
          'import { Typography } from \'@wonder-ui/core\';\n\nexport default function Example() {\n  return (\n    <div>\n      <Typography paragraph>paragraph \u5e26\u6709\u4e0b\u8fb9\u8ddd</Typography>\n      <Typography gutterBottom>gutterBottom \u5e26\u6709\u5c0f\u4e00\u70b9\u7684\u4e0b\u8fb9\u8ddd</Typography>\n      <Typography noWrap style={{ width: 150 }}>\n        \u8d85\u51fa\u90e8\u5206\u9690\u85cf, \u8d85\u51fa\u90e8\u5206\u9690\u85cf, \u8d85\u51fa\u90e8\u5206\u9690\u85cf, \u8d85\u51fa\u90e8\u5206\u9690\u85cf,\n      </Typography>\n      <Typography align="center">align \u5bf9\u9f50\u6587\u672c</Typography>\n    </div>\n  );\n}',
        qt =
          'import { WhiteSpace, Divider, styled } from \'@wonder-ui/core\';\n\nconst WhiteSpaceDemo = styled(WhiteSpace)({\n  background: \'#0092ff\'\n});\n\nexport default () => (\n  <div>\n    <Divider>Size sm</Divider>\n    <WhiteSpaceDemo size="small" />\n\n    <Divider>Size md (default)</Divider>\n    <WhiteSpaceDemo />\n\n    <Divider>Size lg</Divider>\n    <WhiteSpaceDemo size="large" />\n  </div>\n);',
        Yt =
          'import {\n  WhiteSpace,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText,\n  Page\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page>\n    <List>\n      <ListHeader>WhiteSpace</ListHeader>\n      <ListItem divider>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <WhiteSpace component="li" />\n      <ListItem>\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);',
        $t =
          'import { CircularProgress, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <CircularProgress color="primary" />\n    <CircularProgress color="secondary" />\n    <CircularProgress color="success" />\n    <CircularProgress color="danger" />\n    <CircularProgress color="warning" />\n    <CircularProgress color="info" />\n    <CircularProgress color="light" />\n    <CircularProgress color="dark" />\n  </Space>\n);',
        Zt =
          "import { CircularProgress, Space } from '@wonder-ui/core';\n\nexport default () => (\n  <Space>\n    <CircularProgress />\n    <CircularProgress size={24} />\n  </Space>\n);",
        Xt =
          'import * as React from \'react\';\nimport { Space, CircularProgress } from \'@wonder-ui/core\';\nimport { useInterval } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [count, setCount] = React.useState(0);\n\n  useInterval(() => {\n    if (count < 100) {\n      setCount(count + 10);\n    } else {\n      setCount(0);\n    }\n  }, 800);\n\n  return (\n    <Space>\n      <CircularProgress variant="determinate" value={20} />\n      <CircularProgress variant="determinate" value={40} />\n      <CircularProgress variant="determinate" value={60} />\n      <CircularProgress variant="determinate" value={80} />\n      <CircularProgress variant="determinate" value={100} />\n      <CircularProgress\n        variant="determinate"\n        size={100}\n        thickness={1}\n        value={count}\n        label={`${count}%`}\n      />\n    </Space>\n  );\n};',
        Jt =
          'import { LinearProgress, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <LinearProgress variant="indeterminate" color="primary" />\n  </Space>\n);',
        Qt =
          'import { LinearProgress, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <LinearProgress variant="determinate" value={20} color="primary" />\n    <LinearProgress variant="determinate" value={40} color="secondary" />\n    <LinearProgress variant="determinate" value={60} color="success" />\n    <LinearProgress variant="determinate" value={80} color="danger" />\n    <LinearProgress variant="determinate" value={80} color="warning" />\n    <LinearProgress variant="determinate" value={80} color="info" />\n  </Space>\n);',
        en =
          'import { LinearProgress } from \'@wonder-ui/core\';\n\nexport default () => (\n  <LinearProgress variant="determinate" value={80} color="primary" animated />\n);',
        tn =
          'import { LinearProgress, Space } from \'@wonder-ui/core\';\nimport * as React from \'react\';\n\nconst intervalDelay = 100;\nconst intervalIncrement = 0.01;\n\nexport default () => {\n  const [percentComplete, setPercentComplete] = React.useState(0);\n\n  React.useEffect(() => {\n    const id = setInterval(() => {\n      setPercentComplete((intervalIncrement + percentComplete) % 1);\n    }, intervalDelay);\n    return () => {\n      clearInterval(id);\n    };\n  });\n  return (\n    <Space direction="vertical">\n      <LinearProgress\n        animated\n        variant="determinate"\n        value={percentComplete * 100}\n        color="primary"\n      >\n        {Math.round(percentComplete * 100)}%\n      </LinearProgress>\n    </Space>\n  );\n};';
      t['default'] = {
        'activityindicator-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'DEPv'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: d } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'activityindicator-demo1',
          },
        },
        'backtop-basic': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'qUdi'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: l } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            iframe: 'true',
            identifier: 'backtop-basic',
          },
        },
        'backtop-customize': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'EF91'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: s } },
            dependencies: {
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'backtop-customize',
          },
        },
        'backdrop-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'BZwV'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: p } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'backdrop-demo1',
          },
        },
        'badge-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'zYl5'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: c } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo1',
          },
        },
        'badge-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'XpGw'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: u } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo2',
          },
        },
        'badge-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '7MAH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: f } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo3',
          },
        },
        'badge-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Daiw'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: m } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo4',
          },
        },
        'badge-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'TPBt'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: y } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo5',
          },
        },
        'button-colors': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'A9T5'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: E } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-colors',
          },
        },
        'button-tags': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'R33j'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: v } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-tags',
          },
        },
        'button-outlined': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'xF4p'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: H } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-outlined',
          },
        },
        'button-text': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vFXa'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: h } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-text',
          },
        },
        'button-shape': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'YqZb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: g } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-shape',
          },
        },
        'button-size': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ShZ6'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: M } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-size',
          },
        },
        'button-block': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'gV5K'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: b } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-block',
          },
        },
        'button-disabled': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'F/Dv'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: L } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-disabled',
          },
        },
        'buttongroup-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'G847'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: T } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo1',
          },
        },
        'buttongroup-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '6p/f'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: C } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo2',
          },
        },
        'buttongroup-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'CxlY'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: D } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo3',
          },
        },
        'buttongroup-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'P9dj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: w } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo4',
          },
        },
        'buttongroup-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'h/wS'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: I } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo5',
          },
        },
        'cascader-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ppDA'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: x } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description: '',
            identifier: 'cascader-demo1',
          },
        },
        'checkbox-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '1Ar9'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: P } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'checkbox-demo1',
          },
        },
        'checkbox-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'oPmP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: R } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            background: '#f5f5f5',
            identifier: 'checkbox-demo2',
          },
        },
        'checkbox-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'AWKq'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: S } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            background: '#f5f5f5',
            identifier: 'checkbox-demo3',
          },
        },
        'collapse-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'thaS'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: k } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'collapse-demo1',
          },
        },
        'collapse-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'jR8Y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: B } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'collapse-demo2',
          },
        },
        'collapse-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vgLr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: A } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'collapse-demo3',
          },
        },
        'countdown-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'rA3m'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: O } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u7528\u8fc7<code>formattedRes</code>\u8fd4\u56de\u7684\u6570\u503c\u5b9a\u4e49\u81ea\u5df1\u9700\u8981\u7684\u683c\u5f0f</p></div>',
            identifier: 'countdown-demo1',
          },
        },
        'countdown-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ENpr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: F } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u624b\u52a8\u63a7\u5236\u72b6\u6001\u5b9e\u73b0\u4e00\u4e2a\u77ed\u4fe1\u53d1\u9001\u6309\u94ae</p></div>',
            identifier: 'countdown-demo2',
          },
        },
        'datepicker-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'A5kc'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: K } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              dayjs: { version: '1.10.5' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'datepicker-demo1',
          },
        },
        'datepicker-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'z69Y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: V } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              dayjs: { version: '1.10.5' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'datepicker-demo2',
          },
        },
        'timepicker-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'GpJG'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: j } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              dayjs: { version: '1.10.5' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'timepicker-demo1',
          },
        },
        'dialog-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'kKOs'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: U } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dialog-demo1',
          },
        },
        'dialog-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'palp'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: G } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dialog-demo2',
          },
        },
        'withdialog-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '40Xy'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: z } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'withdialog-demo2',
          },
        },
        'withdialog-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'kWmP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: W } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'withdialog-demo1',
          },
        },
        'dialogcontent-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'eXZk'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: N } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dialogcontent-demo1',
          },
        },
        'divider-horizontal': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'dPHl'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: _ } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-horizontal',
          },
        },
        'divider-horizontal-title': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'HUHy'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: q } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-horizontal-title',
          },
        },
        'divider-vertical-title': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'XiJA'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Y } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-vertical-title',
          },
        },
        'divider-vertical': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Pla+'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: $ } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-vertical',
          },
        },
        'drawer-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '9fIR'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Z } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'drawer-demo1',
          },
        },
        'dropdownmenu-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'NeMZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: X } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dropdownmenu-demo1',
          },
        },
        'dropdownmenu-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'c0y0'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: J } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dropdownmenu-demo2',
          },
        },
        'dropdownmenu-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ueFs'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Q } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dropdownmenu-demo3',
          },
        },
        'empty-basic': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '4Yq8'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ee } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'empty-basic',
          },
        },
        'empty-customize': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'CQZ4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: te } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'empty-customize',
          },
        },
        'input-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'zxqW'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ne } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u57fa\u672c\u4f7f\u7528</p></div>',
            identifier: 'input-demo1',
          },
        },
        'input-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'C4vg'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ie } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5e26\u79fb\u9664\u56fe\u6807',
            description:
              '<div class="markdown"><p>\u70b9\u51fb\u6e05\u7a7a\u5185\u5bb9</p></div>',
            identifier: 'input-demo2',
          },
        },
        'input-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'nAvb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: re } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            title: '\u524d\u7f00&\u540e\u7f00',
            description:
              '<div class="markdown"><p>\u5728\u8f93\u5165\u6846\u4e0a\u6dfb\u52a0\u524d\u7f00\u6216\u540e\u7f00\u56fe\u6807\u3002</p></div>',
            identifier: 'input-demo3',
          },
        },
        'input-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'sVUO'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ae } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u65e0\u8fb9\u6846',
            description:
              '<div class="markdown"><p>\u65e0\u8fb9\u6846</p></div>',
            identifier: 'input-demo4',
          },
        },
        'input-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '3tgb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: oe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u9650\u5236\u8f93\u5165\u957f\u5ea6',
            description:
              '<div class="markdown"><p>\u9650\u5236\u8f93\u5165\u957f\u5ea6</p></div>',
            identifier: 'input-demo5',
          },
        },
        'input-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'r5/N'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: de } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'input-demo6',
          },
        },
        'input-demo7': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '7TMd'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: le } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              'util-helpers': { version: '4.0.1' },
              react: { version: '>=16.8.0' },
            },
            title: '\u683c\u5f0f\u5316\u663e\u793a',
            description: '',
            identifier: 'input-demo7',
          },
        },
        'input-demo8': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lHSb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: se } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u805a\u7126',
            description:
              '<div class="markdown"><p>\u805a\u7126\u989d\u5916\u914d\u7f6e\u5c5e\u6027\u3002</p></div>',
            identifier: 'input-demo8',
          },
        },
        'input-demo9': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'sIxB'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: pe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5bc6\u7801\u6846',
            description:
              '<div class="markdown"><p>\u70b9\u51fb\u6e05\u7a7a\u5185\u5bb9</p></div>',
            identifier: 'input-demo9',
          },
        },
        'inputnumber-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZjEV'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ce } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u57fa\u672c\u4f7f\u7528</p></div>',
            identifier: 'inputnumber-demo1',
          },
        },
        'inputnumber-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'V9ZL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ue } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u683c\u5f0f\u5316\u5c55\u793a',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>formatter</code> \u683c\u5f0f\u5316\u6570\u5b57\uff0c\u4ee5\u5c55\u793a\u5177\u6709\u5177\u4f53\u542b\u4e49\u7684\u6570\u636e\uff0c\u5f80\u5f80\u9700\u8981\u914d\u5408 <code>parser</code> \u4e00\u8d77\u4f7f\u7528\u3002</p></div>',
            identifier: 'inputnumber-demo2',
          },
        },
        'inputnumber-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'INbC'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: fe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u9ad8\u7cbe\u5ea6\u5c0f\u6570',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>stringMode</code> \u5f00\u542f\u9ad8\u7cbe\u5ea6\u5c0f\u6570\u652f\u6301\uff0c<code>onChange</code> \u4e8b\u4ef6\u5c06\u8fd4\u56de string \u7c7b\u578b\u3002\u5bf9\u4e8e\u65e7\u7248\u6d4f\u89c8\u5668\uff0c\u4f60\u9700\u8981 BigInt polyfill\u3002</p></div>',
            identifier: 'inputnumber-demo3',
          },
        },
        'inputnumber-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '/euP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: me } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u952e\u76d8\u884c\u4e3a',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>keyboard</code> \u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u952e\u76d8\u884c\u4e3a\u3002</p></div>',
            identifier: 'inputnumber-demo4',
          },
        },
        'inputnumber-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vc8u'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ye } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u8d85\u51fa\u8fb9\u754c',
            description:
              '<div class="markdown"><p>\u5f53\u901a\u8fc7\u53d7\u63a7\u5c06 <code>value</code> \u8d85\u51fa\u8fb9\u754c\u65f6\uff0c\u63d0\u4f9b\u8b66\u544a\u6837\u5f0f\u3002</p></div>',
            identifier: 'inputnumber-demo5',
          },
        },
        'inputnumber-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '4r5S'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ee } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u81ea\u5b9a\u4e49',
            description:
              '<div class="markdown"><p>\u5185\u90e8\u63d0\u4f9b <code>focus</code>, <code>blur</code> , <code>onInternalStep</code> \u4e09\u4e2a\u65b9\u6cd5</p></div>',
            identifier: 'inputnumber-demo6',
          },
        },
        'label-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lAu0'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ve } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            identifier: 'label-demo1',
          },
        },
        'list-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '9xoI'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: He } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo1',
          },
        },
        'list-listlink': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2xxZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: he } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-listlink',
          },
        },
        'list-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'YESf'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ge } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo2',
          },
        },
        'list-demo8': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'SOYm'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Me } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5185\u5d4c\u5217\u8868',
            background: '#f5f5f5',
            description:
              '<div class="markdown"><p>List inset \u6837\u5f0f</p></div>',
            identifier: 'list-demo8',
          },
        },
        'list-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'VMO4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: be } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo3',
          },
        },
        'list-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'yzFo'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Le } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo4',
          },
        },
        'list-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '+N7Z'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Te } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
            },
            identifier: 'list-demo6',
          },
        },
        'list-checkbox': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'cY4J'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ce } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-checkbox',
          },
        },
        'list-switch': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'YHw8'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: De } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-switch',
          },
        },
        'list-sticky': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'hrbQ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: we } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-sticky',
          },
        },
        'list-infinitescroll': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'a+/7'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ie } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-infinitescroll',
          },
        },
        'list-virtuallist': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'my7o'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: xe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-virtuallist',
          },
        },
        'listinputitem-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2PQQ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Pe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'listinputitem-demo1',
          },
        },
        'listinputitem-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '7weO'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Re } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'listinputitem-demo2',
          },
        },
        'modal-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'HDLZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Se } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>Fade</code> \u8fc7\u6e21\u6548\u679c</p></div>',
            identifier: 'modal-demo1',
          },
        },
        'modal-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZkDH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ke } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            title: '\u81ea\u5b9a\u4e49Modal\u5185\u5bb9',
            description: '',
            identifier: 'modal-demo2',
          },
        },
        'navbar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZVJ+'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Be } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'navbar-demo1',
          },
        },
        'noticebar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'eAUK'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ae } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'noticebar-demo1',
          },
        },
        'page-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '5oeh'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Oe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'page-demo1',
          },
        },
        'page-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'gASm'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Fe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'page-demo2',
          },
        },
        'page-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'NoAN'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ke } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'page-demo3',
          },
        },
        'picker-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Y43Y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ve } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo1',
          },
        },
        'picker-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'tTDL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: je } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo2',
          },
        },
        'picker-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'MkQ4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ue } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo3',
          },
        },
        'picker-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'juUZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ge } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo4',
          },
        },
        'picker-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'cYha'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ze } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            identifier: 'picker-demo5',
          },
        },
        'picker-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'OBKV'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: We } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo6',
          },
        },
        'picker-demo7': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FSlP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ne } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo7',
          },
        },
        'picker-demo8': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'G5Em'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: _e } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              lcn: { version: '3.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo8',
          },
        },
        'popover-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'tXNq'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: qe } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description: '',
            identifier: 'popover-demo1',
          },
        },
        'popup-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '+rph'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ye } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            identifier: 'popup-demo1',
          },
        },
        'portal-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'iJyO'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: $e } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
            },
            title: '\u4f20\u9001\u95e8\u4f7f\u7528',
            description: '',
            identifier: 'portal-demo1',
          },
        },
        'preloader-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FYbj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ze } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo1',
          },
        },
        'preloader-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'K8v7'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Xe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo2',
          },
        },
        'preloader-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 't15G'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Je } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo3',
          },
        },
        'preloader-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '8U+Q'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Qe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo4',
          },
        },
        'pullrefresh-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'b4g9'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: et } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'pullrefresh-demo1',
          },
        },
        'pullrefresh-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ccBf'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: tt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'pullrefresh-demo2',
          },
        },
        'radio-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'HXCj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: nt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'radio-demo1',
          },
        },
        'row-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FBhd'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: it } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528\u5355\u4e00\u7684\u4e00\u7ec4 <code>Row</code> \u548c <code>Col</code> \u6805\u683c\u7ec4\u4ef6\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684\u6805\u683c\u7cfb\u7edf\uff0c\u6240\u6709\u5217<code>Col</code>\u5fc5\u987b\u653e\u5728 <code>Row</code> \u5185\u3002</p></div>',
            identifier: 'row-demo1',
          },
        },
        'row-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'yz1N'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: rt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u8bbe\u7f6e\u4e00\u5217\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>Row</code> \u4e0a\u7684 <code>rowCols</code> prop \u8bbe\u7f6e\u5747\u5206\u7684\u6805\u683c\u3002 <code>Col</code> \u4e0a\u7684 <code>cols</code> prop \u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u4ee5\u8986\u76d6<code>rowCols</code></p></div>',
            identifier: 'row-demo2',
          },
        },
        'row-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2Ns3'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: at } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u54cd\u5e94\u7684\u6805\u683c',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>Row</code> \u4e0a\u7684 <code>rowCols</code> prop \u8bbe\u7f6e\u5747\u5206\u7684\u6805\u683c\u3002 <code>Col</code> \u4e0a\u7684 <code>cols</code> prop \u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u4ee5\u8986\u76d6<code>rowCols</code></p></div>',
            identifier: 'row-demo3',
          },
        },
        'row-demo-row-cols-auto': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Bcpv'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ot } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u81ea\u7136\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>cols="auto"</code>\u60a8\u53ef\u4ee5\u4e3a\u5217\u8d4b\u4e88\u5176\u81ea\u7136\u5bbd\u5ea6</p></div>',
            identifier: 'row-demo-row-cols-auto',
          },
        },
        'row-demo-row-cols-width': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'bXSJ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: dt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u9884\u8bbe\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>cols={number}</code>\u60a8\u53ef\u4ee5\u4e3a\u5217\u8d4b\u4e88\u5176<code>1~12</code>\u9884\u8bbe\u5bbd\u5ea6</p></div>',
            identifier: 'row-demo-row-cols-width',
          },
        },
        'row-demo-col-width': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'icOE'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: lt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: 'Col\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>col={number}</code>\u60a8\u53ef\u4ee5\u4e3a\u5217\u8d4b\u4e88\u5176\u9884\u8bbe\u5bbd\u5ea6</p></div>',
            identifier: 'row-demo-col-width',
          },
        },
        'searchbar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'tVcH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: st } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'searchbar-demo1',
          },
        },
        'searchbar-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'C2yR'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: pt } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
            },
            identifier: 'searchbar-demo2',
          },
        },
        'searchbar-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2n0y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ct } },
            dependencies: {
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'searchbar-demo3',
          },
        },
        'skeleton-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'j/mH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ut } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            identifier: 'skeleton-demo1',
          },
        },
        'skeleton-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Xwf3'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ft } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u663e\u793a\u5934\u50cf',
            identifier: 'skeleton-demo2',
          },
        },
        'snackbar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '6JiA'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: mt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4e00\u6761\u57fa\u672c\u7684\u901a\u77e5\u6d88\u606f</p></div>',
            identifier: 'snackbar-demo1',
          },
        },
        'snackbar-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'VS0/'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: yt } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u6d88\u606f\u6761\u7684\u4f4d\u7f6e',
            description:
              '<div class="markdown"><p>\u901a\u8fc7\u6307\u5b9a <code>anchorOrigin</code> \u7684\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u63a7\u5236\u6d88\u606f\u6761\u7684\u4f4d\u7f6e</p></div>',
            identifier: 'snackbar-demo2',
          },
        },
        'withdialog-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '64HL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Et } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: 'Toast',
            description:
              '<div class="markdown"><p>Snackbar \u5b9e\u73b0\u7684 Toast</p></div>',
            identifier: 'withdialog-demo3',
          },
        },
        'space-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'qQF2'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: vt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u7528\u6cd5',
            description:
              '<div class="markdown"><p>\u76f8\u90bb\u7ec4\u4ef6\u6c34\u5e73\u95f4\u8ddd</p></div>',
            identifier: 'space-demo1',
          },
        },
        'space-spacesplit': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'gs0z'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ht } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5206\u9694\u7b26',
            description:
              '<div class="markdown"><p>\u8bbe\u7f6e\u5206\u5272\u7b26</p></div>',
            identifier: 'space-spacesplit',
          },
        },
        'space-wrap': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'rogs'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ht } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6362\u884c\u6392\u5217',
            description:
              '<div class="markdown"><p>\u53ef\u4ee5\u8bbe\u7f6e\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u7684\u95f4\u8ddd</p></div>',
            identifier: 'space-wrap',
          },
        },
        'space-horizontalalign': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'uQ+O'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: gt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6c34\u5e73\u65b9\u5411-\u6c34\u5e73\u5bf9\u9f50',
            description: '',
            identifier: 'space-horizontalalign',
          },
        },
        'space-verticalalignments': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'pFYj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Mt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6c34\u5e73\u65b9\u5411-\u5782\u76f4\u5bf9\u9f50',
            description: '',
            identifier: 'space-verticalalignments',
          },
        },
        'space-verticalhorizontalalign': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Pi98'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: bt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5782\u76f4\u65b9\u5411-\u6c34\u5e73\u5bf9\u9f50',
            description: '',
            identifier: 'space-verticalhorizontalalign',
          },
        },
        'space-verticalverticalalignments': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'uTVl'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Lt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5782\u76f4\u65b9\u5411-\u5782\u76f4\u5bf9\u9f50',
            description: '',
            identifier: 'space-verticalverticalalignments',
          },
        },
        'stepper-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'EUtj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Tt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'stepper-demo1',
          },
        },
        'stepper-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'fLN/'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ct } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            identifier: 'stepper-demo2',
          },
        },
        'sticky-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FtM2'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Dt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u5c06\u5185\u5bb9\u5305\u88f9\u5728 <code>Sticky</code> \u7ec4\u4ef6\u5185\u5373\u53ef</p></div>',
            identifier: 'sticky-demo1',
          },
        },
        'sticky-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Eeze'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: wt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5438\u9876\u8ddd\u79bb',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>offsetTop</code> \u5c5e\u6027\u53ef\u4ee5\u8bbe\u7f6e\u7ec4\u4ef6\u5728\u5438\u9876\u65f6\u4e0e\u9876\u90e8\u7684\u8ddd\u79bb\u3002</p></div>',
            identifier: 'sticky-demo2',
          },
        },
        'sticky-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZkiR'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: It } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6307\u5b9a\u5bb9\u5668',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>container</code> \u5c5e\u6027\u53ef\u4ee5\u6307\u5b9a\u7ec4\u4ef6\u7684\u5bb9\u5668\uff0c\u9875\u9762\u6eda\u52a8\u65f6\uff0c\u7ec4\u4ef6\u4f1a\u59cb\u7ec8\u4fdd\u6301\u5728\u5bb9\u5668\u8303\u56f4\u5185\uff0c\u5f53\u7ec4\u4ef6\u5373\u5c06\u8d85\u51fa\u5bb9\u5668\u5e95\u90e8\u65f6\uff0c\u4f1a\u56fa\u5b9a\u5728\u5bb9\u5668\u7684\u5e95\u90e8\u3002</p></div>',
            identifier: 'sticky-demo3',
          },
        },
        'svgicon-default': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Pg95'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: xt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'svgicon-default',
          },
        },
        'swipe-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'doI9'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Pt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo1',
          },
        },
        'swipe-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'BKQw'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Rt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo2',
          },
        },
        'swipe-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lK1K'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: St } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo3',
          },
        },
        'swipe-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2jBL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: kt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo4',
          },
        },
        'swipe-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '1Dyr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Bt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo5',
          },
        },
        'tabs-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '8ikj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: At } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>TabPane</code>\u5207\u6362\u5185\u5bb9</p></div>',
            identifier: 'tabs-demo1',
          },
        },
        'tabs-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '95z6'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ot } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>TabPane</code>\u5207\u6362\u5185\u5bb9</p></div>',
            identifier: 'tabs-demo2',
          },
        },
        'tabs-custom-tabnav': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'uy+e'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ft } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
            },
            title: '\u81ea\u5b9a\u4e49\u9009\u9879\u5361',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>TabPane</code>\u5207\u6362\u5185\u5bb9</p></div>',
            identifier: 'tabs-custom-tabnav',
          },
        },
        'tag-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '6Ygl'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Kt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'tag-demo1',
          },
        },
        'tag-closable': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vcGX'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Vt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              '@wonder-ui/utils': { version: '2.1.13' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'tag-closable',
          },
        },
        'checkabletag-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Jm9P'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: jt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'checkabletag-demo1',
          },
        },
        'toggle-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '8AMZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ut } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u7684\u5f00\u5173',
            description: '',
            identifier: 'toggle-demo1',
          },
        },
        'toggle-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lm0o'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Gt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5c3a\u5bf8',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 size \u5c5e\u6027 \u5b9a\u4e49\u5c0f\u4e00\u53f7\u5f00\u5173</p></div>',
            identifier: 'toggle-demo2',
          },
        },
        'toggle-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'DCg2'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: zt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            title: '\u81ea\u5b9a\u4e49\u56fe\u6807',
            description: '',
            identifier: 'toggle-demo4',
          },
        },
        'tooltip-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZINC'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Wt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'tooltip-demo1',
          },
        },
        'typography-title': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2bf4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Nt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'typography-title',
          },
        },
        'typography-paragraph': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'oLm3'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: _t } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'typography-paragraph',
          },
        },
        'whitespace-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'aEVI'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: qt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u901a\u8fc7<code>size</code>\u6765\u8bbe\u7f6e\u95f4\u9694\u5927\u5c0f</p></div>',
            identifier: 'whitespace-demo1',
          },
        },
        'whitespace-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'CixJ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Yt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u548c List \u4e00\u8d77\u4f7f\u7528',
            description: '',
            identifier: 'whitespace-demo2',
          },
        },
        'circularprogress-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '66xc'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: $t } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u4e0d\u5b9a\u91cf\u7684\u73af\u5f62\u8fdb\u5ea6\u6761',
            description: '',
            identifier: 'circularprogress-demo1',
          },
        },
        'circularprogress-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ILP4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Zt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u73af\u5f62\u8fdb\u5ea6\u5c3a\u5bf8',
            description:
              '<div class="markdown"><p>\u8bbe\u7f6e\u5c3a\u5bf8 <code>size</code></p></div>',
            identifier: 'circularprogress-demo2',
          },
        },
        'circularprogress-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZrKj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Xt } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-31' },
              '@wonder-ui/hooks': { version: '1.1.11' },
            },
            title: '\u5b9a\u91cf\u73af\u5f62\u8fdb\u5ea6',
            description: '',
            identifier: 'circularprogress-demo3',
          },
        },
        'linearprogress-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FMO+'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Jt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u4e0d\u5b9a\u91cf\u7684\u7ebf\u6027\u8fdb\u5ea6\u6761',
            description: '',
            identifier: 'linearprogress-demo4',
          },
        },
        'linearprogress-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'sjmr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Qt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u7ebf\u6027\u8fdb\u5ea6\u6761\u989c\u8272',
            description: '',
            identifier: 'linearprogress-demo1',
          },
        },
        'linearprogress-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'd3TQ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: en } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u7ebf\u6027\u8fdb\u5ea6\u6761\u52a8\u753b',
            description: '',
            identifier: 'linearprogress-demo2',
          },
        },
        'linearprogress-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(79),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Y0z/'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: tn } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-31' },
              react: { version: '>=16.8.0' },
            },
            title: '\u7ebf\u6027\u8fdb\u5ea6\u6761\u6807\u7b7e',
            description: '',
            identifier: 'linearprogress-demo3',
          },
        },
      };
    },
    Zs1V: function (e) {
      e.exports = JSON.parse(
      );
    },
  },
]);