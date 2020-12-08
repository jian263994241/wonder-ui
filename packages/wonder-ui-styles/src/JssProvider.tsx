import * as React from 'react';
import * as JSS from 'jss';
import JssContext from './JssContext';
import { Context } from './types';

type Props = Context & {
  children: React.ReactNode;
};

export default function JssProvider(props: Props) {
  const {
    children,
    registry,
    classNamePrefix,
    jss,
    generateId,
    disableStylesGeneration,
    media,
    managers,
    id
  } = props;

  const outerContext = React.useContext(JssContext);
  const context = React.useMemo(() => {
    const context: Context = { ...outerContext };

    if (registry) {
      context.registry = registry;
    }

    if (managers) {
      context.managers = managers;
    }

    if (id !== undefined) {
      context.id = id;
    }

    if (generateId !== undefined) {
      context.generateId = generateId;
    } else if (
      !context.generateId ||
      !outerContext ||
      context.id !== outerContext.id
    ) {
      context.generateId = JSS.createGenerateId(context.id);
    }

    if (classNamePrefix) {
      context.classNamePrefix =
        (context.classNamePrefix || '') + classNamePrefix;
    }

    if (media !== undefined) {
      context.media = media;
    }

    if (jss) {
      context.jss = jss;
    }

    if (disableStylesGeneration !== undefined) {
      context.disableStylesGeneration = disableStylesGeneration;
    }

    return context;
  }, [
    outerContext,
    registry,
    classNamePrefix,
    jss,
    generateId,
    disableStylesGeneration,
    media,
    managers,
    id
  ]);

  return <JssContext.Provider value={context} children={children} />;
}
