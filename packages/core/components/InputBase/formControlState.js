export default function formControlState({ props, states, uiFormControl }) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];

    if (uiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = uiFormControl[state];
      }
    }

    return acc;
  }, {});
}