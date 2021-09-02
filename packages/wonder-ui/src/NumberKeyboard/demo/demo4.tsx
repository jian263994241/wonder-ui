import { NumberKeyboard, SvgIcon, Space } from '@wonder-ui/core';

const icon = (
  <SvgIcon
    style={{ width: 17, height: 20, display: 'block' }}
    viewBox="0 0 17 20"
  >
    <path d="M8.24193278 19.3561344c-.0580684 0-.13549294-.0193561-.19356135-.0387122-3.94865142-1.3742856-6.5810857-4.60676-7.5876047-9.32965683C-.2941225 6.4649489.1123563 3.40667967.13171245 3.27118672c.01935613-.1742052.1161368-.30969815.25162974-.40647882.13549293-.09678067.30969814-.13549294.48390335-.09678067.01935614 0 1.25814874.290342 2.72921496.09678067C5.4933617 2.63243428 6.88700338 1.76140823 7.7386733.30969815c.1742052-.29034202.52261563-.3871227.81295765-.21291748.29034202.1742052.3871227.52261563.21291748.81295765C6.7902227 4.31641798 2.84157128 4.23899344 1.25436825 4.0454321c-.07742453 1.04523126-.13549294 3.29054285.3871227 5.7294158.92909445 4.3357741 3.2131183 7.1617697 6.79400318 8.4199185.30969815.1161368.48390336.4451911.36776656.7548892-.07742454.2516298-.30969815.4064788-.5613279.4064788z"></path>
    <path d="M8.39678185 19.3367783c-.25162974 0-.48390336-.1548491-.5613279-.4064788-.1161368-.3096982.0580684-.6581086.36776656-.7548893 3.600241-1.2581487 5.9229771-4.0841443 6.91014-8.41991844.5419718-2.40016067.5226156-4.60676.4645472-5.63263512-.580684.0580684-1.5097785.1161368-2.5356536-.01935614-2.3420922-.30969815-4.12285662-1.4129978-5.16808788-3.19376218-.1742052-.29034202-.0580684-.65810857.21291748-.81295765.29034202-.1742052.65810857-.0580684.81295765.21291748 2.07110635 3.52281647 7.06498905 2.55500975 7.12305745 2.5356536.1548491-.03871226.3290543 0 .4645473.0967807.1354929.09678066.2322736.25162973.2516297.4064788.0193561.13549295.3677666 3.17440606-.4451911 6.65851025-1.0839435 4.7035407-3.7357339 7.916659-7.68438537 9.2909445-.07742454.0387123-.13549294.0387123-.21291748.0387123z"></path>
    <path d="M8.55163093 12.9879662l-.07742454.0774245c-.2129175.2322737-.60004018.2516298-.8323138.0387123l-2.6517904-2.4388729c-.23227362-.2129175-.25162976-.6000402-.01935614-.8323138l.07742453-.07742454c.21291747-.2322736.60004016-.25162975.83231378-.03871227l2.63243428 2.4388729c.2322736.2129175.25162975.6000402.03871227.8323138z"></path>
    <path d="M7.89352236 13.0460346l-.0580684-.0774245c-.21291748-.2516298-.17420522-.6193963.09678067-.8323138l4.68418457-3.77444622c.2516297-.21291748.6193963-.1742052.8323137.09678067l.0580684.07742454c.2129175.25162974.1742053.6193963-.0967806.83231377L8.72583614 13.1234592c-.25162975.2129174-.63875244.1742052-.83231378-.0774246z"></path>
  </SvgIcon>
);

export default () => (
  <NumberKeyboard
    randomKeyOrder
    showCloseKey
    title={<Space>{icon}安全键盘</Space>}
  />
);
