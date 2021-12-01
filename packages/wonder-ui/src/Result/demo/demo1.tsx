import { Result, Paper, Page, Space } from '@wonder-ui/core';
import { EmojiSunglasses } from '@wonder-ui/icons';

export default () => (
  <Page>
    <Space direction="vertical" gap={20}>
      <Paper>
        <Result
          status="success"
          title="操作成功"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </Paper>

      <Paper>
        <Result
          status="error"
          title="无法完成操作"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </Paper>

      <Paper>
        <Result
          status="info"
          title="信息提示"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </Paper>

      <Paper>
        <Result
          status="waiting"
          title="等待处理"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </Paper>

      <Paper>
        <Result
          status="warning"
          title="警告提示"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </Paper>

      <Paper>
        <Result
          icon={<EmojiSunglasses />}
          status="success"
          title="Well done"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </Paper>
    </Space>
  </Page>
);
