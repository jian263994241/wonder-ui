import * as React from 'react';
import { render } from '@testing-library/react';
import { useClickAway } from '../src';
import userEvent from '@testing-library/user-event';

describe('useClickAway', () => {
  test('basic usage', () => {
    function TestElement(props: any) {
      const { onClickAway } = props;

      const domRef = React.useRef(null);

      useClickAway(onClickAway, domRef);

      return (
        <div>
          <button>Button</button>
          <div ref={domRef}>ClickAway</div>
        </div>
      );
    }

    let trigger = false;

    const { getByText } = render(
      <TestElement
        onClickAway={() => {
          trigger = true;
        }}
      />
    );

    const container = getByText('ClickAway');
    const outerButton = getByText('Button');

    userEvent.click(container);

    expect(trigger).toBeFalsy();

    userEvent.click(outerButton);

    expect(trigger).toBeTruthy();
  });

  test('custom element', () => {
    function TestElement(props: any) {
      const { onClickAway } = props;

      useClickAway(onClickAway, () => document.getElementById('target'));

      return (
        <div>
          <button>Button</button>
          <div id="target">ClickAway</div>
        </div>
      );
    }

    let trigger = false;

    const { getByText } = render(
      <TestElement
        onClickAway={() => {
          trigger = true;
        }}
      />
    );

    const container = getByText('ClickAway');
    const outerButton = getByText('Button');

    userEvent.click(container);

    expect(trigger).toBeFalsy();

    userEvent.click(outerButton);

    expect(trigger).toBeTruthy();
  });

  test('multiple elements', () => {
    function TestElement(props: any) {
      const { onClickAway } = props;

      const domRef = React.useRef(null);

      useClickAway(onClickAway, [
        () => document.getElementById('target'),
        domRef
      ]);

      return (
        <div>
          <button>Button</button>
          <div id="target">ClickAway</div>
          <div ref={domRef}>ClickAway2</div>
        </div>
      );
    }

    let trigger = false;

    const { getByText } = render(
      <TestElement
        onClickAway={() => {
          trigger = true;
        }}
      />
    );

    const container = getByText('ClickAway');
    const container2 = getByText('ClickAway2');
    const outerButton = getByText('Button');

    userEvent.click(container);

    expect(trigger).toBeFalsy();

    userEvent.click(container2);

    expect(trigger).toBeFalsy();

    userEvent.click(outerButton);

    expect(trigger).toBeTruthy();
  });

  test('custom trigger event', () => {
    function TestElement(props: any) {
      const { onClickAway } = props;

      const domRef = React.useRef(null);

      useClickAway(onClickAway, domRef, 'dblclick');

      return (
        <div>
          <button>Button</button>
          <div ref={domRef}>ClickAway</div>
        </div>
      );
    }

    let trigger = false;

    const { getByText } = render(
      <TestElement
        onClickAway={() => {
          trigger = true;
        }}
      />
    );

    const container = getByText('ClickAway');
    const outerButton = getByText('Button');

    userEvent.dblClick(container);

    expect(trigger).toBeFalsy();

    userEvent.dblClick(outerButton);

    expect(trigger).toBeTruthy();
  });
});
