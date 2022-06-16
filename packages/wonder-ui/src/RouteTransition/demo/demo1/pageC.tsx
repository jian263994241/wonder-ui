import { Button, Page, Typography } from '@wonder-ui/core';
import { useNavigate } from 'react-router-dom-v6';

export default function PageA() {
  const nav = useNavigate();

  const back = () => nav(-1);

  return (
    <Page title="店铺" showBackButton onBack={back}>
      <Typography variant="h2">店铺列表</Typography>
    </Page>
  );
}
