import {
  Button,
  Page,
  Card,
  Result,
  Space,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';
import { useNavigate } from 'react-router-dom-v6';

export default function PageB() {
  const nav = useNavigate();

  const back = () => nav(-1);

  return (
    <Page title="报名结果" showBackButton onBack={back}>
      <Result
        status="waiting"
        title="您的申请已提交审核"
        description="审核结果将在3-5个工作日内给出，您可在“我的-我的活动”中查询审核结果"
      />

      <Card style={{ borderRadius: 0 }}>
        <Typography variant="body2" color="textSecondary">
          店铺名：广州亿付联网络科技有限公司3店
        </Typography>
        <Typography variant="body2" color="textSecondary">
          商户编号：812440357320389
        </Typography>
        <Typography variant="body2" color="textSecondary">
          申请时间：2022-04-31 08:00:00
        </Typography>
      </Card>

      <WhiteSpace />

      <div style={{ padding: 8 }}>
        <Space itemEqual>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => nav('/c', { replace: true })}
          >
            完成
          </Button>
          <Button fullWidth variant="contained" onClick={back}>
            继续报名其他店铺
          </Button>
        </Space>
      </div>
    </Page>
  );
}
