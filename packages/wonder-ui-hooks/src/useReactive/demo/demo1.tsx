import { useReactive } from '@wonder-ui/hooks';

interface State {
  hello: string;
  count: number;
  [key: string]: any;
}

export default () => {
  const state = useReactive<State>({
    hello: '',
    count: 0
  });

  console.log('update');

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button
          type="button"
          onClick={() => {
            state.hello = 'word';
          }}
        >
          set hello
        </button>
        <button
          type="button"
          onClick={() => {
            state.foo = 'bar';
          }}
          style={{ margin: '0 8px' }}
        >
          set foo
        </button>
        <button
          type="button"
          onClick={() => {
            state.count = state.count + 1;
            state.hello = 'word' + state.count;
          }}
        >
          count + 1
        </button>
      </p>
    </div>
  );
};
