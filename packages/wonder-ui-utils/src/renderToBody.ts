import { render, unmount as reactUnmount } from './reactRender';

export function renderToBody(
  element: React.ReactElement,
  container: HTMLElement = document.createElement('div')
) {
  render(element, container);

  return function unmount() {
    reactUnmount(container);
  };
}
