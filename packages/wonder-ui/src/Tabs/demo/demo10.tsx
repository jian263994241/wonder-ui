import { Tab, Tabs } from '@wonder-ui/core';

function LinkTab(props: any) {
  return (
    <Tab
      component="a"
      onClick={(event: Event) => {
        event.preventDefault();
        console.log('Link:', props.href);
      }}
      {...props}
    />
  );
}

export default () => (
  <Tabs showIndicator>
    <LinkTab label="首页" href="/home" />
    <LinkTab label="页面1" href="/page-1" />
    <LinkTab label="页面2" href="/page-2" />
  </Tabs>
);
