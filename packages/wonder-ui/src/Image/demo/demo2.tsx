import { Image, Space, Typography } from '@wonder-ui/core';

const demoSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

export default () => (
  <Space>
    <div>
      <Image src={demoSrc} width={100} height={100} fit="fill" />
      <Typography variant="body2" color="textSecondary" align="center">
        fill
      </Typography>
    </div>

    <div>
      <Image src={demoSrc} width={100} height={100} fit="contain" />
      <Typography variant="body2" color="textSecondary" align="center">
        contain
      </Typography>
    </div>

    <div>
      <Image src={demoSrc} width={100} height={100} fit="cover" />
      <Typography variant="body2" color="textSecondary" align="center">
        cover
      </Typography>
    </div>

    <div>
      <Image src={demoSrc} width={100} height={100} fit="scale-down" />
      <Typography variant="body2" color="textSecondary" align="center">
        scale-down
      </Typography>
    </div>

    <div>
      <Image src={demoSrc} width={100} height={100} fit="none" />
      <Typography variant="body2" color="textSecondary" align="center">
        none
      </Typography>
    </div>
  </Space>
);
