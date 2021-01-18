import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useTouchFeedback } from '../src';

function Link(props: any) {
  const { children, className, page, ...rest } = props;
  const domRef = useTouchFeedback();

  return (
    <a ref={domRef} className={className} href={page} {...rest}>
      {children}
    </a>
  );
}

test('Link changes the class when touched', () => {
  const { getByText } = render(
    <Link className="link" page="http://www.facebook.com">
      Facebook
    </Link>
  );

  const link = getByText('Facebook');

  fireEvent.touchStart(link);

  expect(link.classList.contains('active')).toBeTruthy();

  fireEvent.touchMove(link);

  expect(link.classList.contains('active')).toBeFalsy();

  fireEvent.touchEnd(link);

  expect(link.classList.contains('active')).toBeFalsy();

  fireEvent.touchCancel(link);

  expect(link.classList.contains('active')).toBeFalsy();

  fireEvent.mouseDown(link);

  expect(link.classList.contains('active')).toBeTruthy();

  fireEvent.mouseUp(link);

  expect(link.classList.contains('active')).toBeFalsy();

  fireEvent.mouseLeave(link);

  expect(link.classList.contains('active')).toBeFalsy();
});
