import {
  Button,
  Card,
  Col,
  Page,
  Result as RcResult,
  Row,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';

export default function ResultPage() {
  return (
    <Page>
      <RcResult
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
        <Row gutter={1}>
          <Col>
            <Button fullWidth variant="outlined">
              完成
            </Button>
          </Col>
          <Col>
            <Button fullWidth variant="contained">
              继续报名其他店铺
            </Button>
          </Col>
        </Row>
      </div>
    </Page>
  );
}
