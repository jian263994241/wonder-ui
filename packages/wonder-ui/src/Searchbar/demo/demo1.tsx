import { Navbar, Page, Searchbar, WhiteSpace } from '@wonder-ui/core';

export default () => (
  <Page
    title="搜索"
    NavbarProps={{
      children: <Searchbar placeholder="请输入搜索关键字" allowCancel />
    }}
  >
    <WhiteSpace />

    <Navbar title="navbar & search">
      <Searchbar placeholder="请输入搜索关键字" allowCancel />
    </Navbar>

    <WhiteSpace />

    <Searchbar placeholder="请输入搜索关键字" allowCancel fixCancelButton />
  </Page>
);
