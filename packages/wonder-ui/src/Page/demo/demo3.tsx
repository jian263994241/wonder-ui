import {
  Button,
  Container,
  Drawer,
  Page,
  Space,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';
import { useBoolean } from '@wonder-ui/hooks';

export default () => {
  const [visible, { setTrue, setFalse }] = useBoolean(false);
  return (
    <Page title="页面和抽屉">
      <WhiteSpace />
      <Container>
        <Button variant="contained" onClick={() => setTrue()}>
          打开抽屉
        </Button>
      </Container>

      <Drawer visible={visible} anchor="bottom" onClose={() => setFalse()}>
        <div style={{ height: '70vh' }}>
          <Page
            showCloseButton
            title="活动承诺函"
            onClose={() => setFalse()}
            toolbar={
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  bottom: 0,
                  zIndex: 3,
                  backgroundColor: '#fff'
                }}
              >
                <Space itemEqual gap={0}>
                  <Button fullWidth shape="square">
                    我再想想
                  </Button>
                  <Button fullWidth variant="contained" shape="square">
                    已阅读并签约
                  </Button>
                </Space>
              </div>
            }
          >
            <div style={{ padding: 16 }}>
              <Typography variant="body2" paragraph>
                致：快钱支付清算信息有限公司
              </Typography>
              <Typography variant="body2" paragraph>
                本人申请参加“2022年快钱特定行业特约商户银联二维码营销政策”，并作出如下承诺：
              </Typography>
              <Typography variant="body2" paragraph>
                一、本人承诺具备真实业务场景、符合特定行业经营内容、具有门店、柜台等实际经营场所，并可支持银联二维码支付产品受理。
              </Typography>
              <Typography variant="body2" paragraph>
                二、本人将根据贵司要求进行收银员培训、受理标识布放或印制、语音播报相关宣传内容，优化二维码产品受理软环境。
              </Typography>
              <Typography variant="body2" paragraph>
                三、本人承诺将按要求配合贵司相关检查、整改工作，如未能完成的，贵司有权采取暂停或者关闭本人交易通道、中止合作等措施，如因此给贵司或第三方造成损失的，本人对此承担全部赔偿责任。具体工作内容包括：
                <br />
                1、本人将做好自身信息的完善及维护工作，并确保提交信息真实、符合报送标准，确保实施情况符合定向服务的要求。本人根据要求配合贵司的检查工作，就贵司检查中发现的不合格情况，立即开展针对性的信息材料补充、维护核实等整改、完善工作。
                <br />
                2、本人将配合贵司做好风险排查、专项合规监控和检查工作，如发现存在风险，将及时向贵司汇报并做好相关处置工作，并配合贵司完成服务调整。同时，贵司可根据相关协查、排查结果，对本人作出进行保留或剔除的处置决策，本人对此无异议。
                <br />
                3、贵司有权对本次合作涉及的支付相关标识的摆放和使用情况进行检查。如发现不符合贵司要求的情形，本人将根据贵司要求立即完成整改。
                <br />
              </Typography>
              <Typography variant="body2" paragraph>
                四、本人承诺在合作期间，不会存在变造交易、伪造自身信息、刷单套利等违规、作弊行为，否则贵司有权采取中止合作等措施，如因此给贵司或第三方造成损失的，本人将承担全部赔偿责任。
              </Typography>
              <Typography variant="body2" paragraph>
                五、本人承诺尊重本合作项下支付相关标识的合法权利并促使该等权利不被侵害，不将该等标识用于非合作项下的用途或者未经贵司书面许可的其他用途。未经贵司事先书面同意，本人不将上述标识的使用许可转让或分许可给任何第三方或为第三方牟利。如本人违反上述规定，贵司有权撤销本协议项下本人对相关标识的使用权，如因此造成贵司或第三方损失的，本人承担全部赔偿责任。
              </Typography>
              <Typography variant="body2" paragraph>
                六、本人承诺将遵守贵司、银联各项业务规则和管理规章，共同探索积极有效的风险控制措施，降低合作业务风险。如本人存在不遵守贵司业务规则或相关管理要求的情况，贵司有权提前终止本协议，所产生的一切损失和责任由本人自行承担。
              </Typography>
              <Typography variant="body2" paragraph>
                七、本人承诺不从事涉及“不正当行为”的交易，本次合作所称“不正当行为”，包括但不限于：虚构；伪造交易；刷单；提供虚假、变造或错误的个人信息、交易信息以及终端信息等；拆单；其他任何不诚信、不正当行为。通过贵司的判断，若本人存在上述恶意违规行为，贵司有权不与本人结算，并可单方终止与本人的合作，对此给贵司或第三方造成损失的，本人承担全部赔偿责任。
              </Typography>
              <Typography variant="body2" paragraph>
                八、因履行本次合作所发生的一切争议双方均应本着友好、互利的原则协商解决。如30日内协商不成，本人同意应将争议提交上海市浦东新区人民法院诉讼解决。
              </Typography>
            </div>
          </Page>
        </div>
      </Drawer>
    </Page>
  );
};
