import { Button, Page, Typography } from '@wonder-ui/core';
import { useNavigate } from 'react-router-dom-v6';

export default function PageA() {
  const nav = useNavigate();
  return (
    <Page title="首页">
      <Typography variant="h2">
        2022年快钱特定行业特约商户银联二维码活动
      </Typography>

      <Button variant="contained" color="primary" onClick={() => nav('/b')}>
        立即报名领取
      </Button>
    </Page>
  );
}
