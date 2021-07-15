/**
 * title: 自定义
 */
import {
  Page,
  List,
  ListItem,
  ListHeader,
  Label,
  Input,
  Row,
  Col,
  Typography,
  IconButton,
  withDialog
} from '@wonder-ui/core';
import { InfoCircle } from '@wonder-ui/icons';

export default withDialog((props) => (
  <Page>
    <List>
      <ListHeader>自定义</ListHeader>
      <ListItem
        extra={
          <IconButton
            edge="end"
            onClick={() => {
              props.dialog.toast('提示文案提示文案');
            }}
          >
            <InfoCircle fontSize="small" />
          </IconButton>
        }
        alignItems="flex-start"
      >
        <Row style={{ width: '100%' }}>
          <Col col={3}>
            <Label
              style={{ width: '100%', height: 36 }}
              required
              colon
              labelAlign="right"
            >
              文本
            </Label>
          </Col>
          <Col col={9}>
            <Input
              borderless
              placeholder="请输入"
              style={{ padding: 0, height: 36 }}
            />
            <Typography color="textSecondary">提示文案提示文案</Typography>
            <Typography color="error">提示文案提示文案</Typography>
          </Col>
        </Row>
      </ListItem>
    </List>
  </Page>
));
