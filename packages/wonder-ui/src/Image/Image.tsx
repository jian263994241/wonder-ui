import * as React from 'react';
import ImageIcon from '../icons/Image';
import ImageX from '../icons/ImageX';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { addUnit, composeClasses, css, unitToPx } from '@wonder-ui/utils';
import {
  COMPONENT_NAME,
  imageClasses,
  imageCssVars,
  useImageCssVars
} from './ImageClasses';
import {
  useCreation,
  useForkRef,
  useInViewport,
  usePrevious,
  useUpdateEffect
} from '@wonder-ui/hooks';
import type { ImageProps } from './ImageTypes';

const useClasses = (styleProps: ImageProps) => {
  const { classes, variant } = styleProps;
  const slots = {
    root: ['root', variant && variant],
    img: ['img']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ImageRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  width: imageCssVars.value('width'),
  height: imageCssVars.value('height'),
  [`&.${imageClasses.rounded}`]: {
    borderRadius: imageCssVars.value('roundedRadius')
  },
  [`&.${imageClasses.circular}`]: {
    borderRadius: '50%',
    [`.${imageClasses.img}`]: {
      borderRadius: 'inherit'
    }
  }
}));

const ImageImg = styled('img', {
  name: COMPONENT_NAME,
  slot: 'Img'
})<{ styleProps: ImageProps }>(({ styleProps }) => ({
  width: '100%',
  height: '100%',
  display: 'block',
  WebkitUserDrag: 'none',
  objectFit: imageCssVars.value('objectFit') as any,
  '&[hidden]': {
    display: 'none'
  }
}));

const Image = React.forwardRef<HTMLDivElement, ImageProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    width: widthProp,
    height: heightProp,
    roundedRadius,
    variant = 'square',
    alt,
    className,
    fit,
    lazy = false,
    crossOrigin,
    decoding,
    loading,
    referrerPolicy,
    sizes,
    srcSet,
    src,
    style,
    useMap,
    placeholder = <ImageIcon fontSize="medium" color="secondary" />,
    fallback = <ImageX fontSize="medium" color="secondary" />,
    onClick,
    onLoad,
    onError,
    ...rest
  } = props;

  const width = useCreation(
    () => (widthProp ? addUnit(unitToPx(widthProp)) : widthProp),
    [widthProp]
  );
  const height = useCreation(
    () => (heightProp ? addUnit(unitToPx(heightProp)) : heightProp),
    [heightProp]
  );

  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [initialized, setInitialized] = React.useState(!lazy);
  const prevSrc = usePrevious(src);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);
  const inViewport = useInViewport(rootRef);

  React.useEffect(() => {
    if (inViewport) {
      setInitialized(true);
    }
  }, [inViewport]);

  useUpdateEffect(() => {
    if (src != prevSrc) {
      setLoaded(false);
      setFailed(false);
    }
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setFailed(true);
    onError?.(e);
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    onLoad?.(e);
  };

  const styleProps = { ...props, fit, width, height, variant, roundedRadius };

  const classes = useClasses(styleProps);

  useImageCssVars();

  return (
    <ImageRoot
      className={css(classes.root, className)}
      style={{
        ...imageCssVars.style({
          width,
          height,
          roundedRadius,
          objectFit: fit
        }),
        ...style
      }}
      ref={handleRef}
      onClick={onClick}
      {...rest}
    >
      {failed ? (
        fallback
      ) : (
        <React.Fragment>
          {!loaded && placeholder}
          <ImageImg
            alt={alt}
            sizes={sizes}
            srcSet={initialized ? srcSet : undefined}
            src={initialized ? src : undefined}
            crossOrigin={crossOrigin}
            decoding={decoding}
            loading={loading}
            referrerPolicy={referrerPolicy}
            useMap={useMap}
            onError={handleError}
            onLoad={handleLoad}
            className={classes.img}
            styleProps={styleProps}
            hidden={!loaded}
          />
        </React.Fragment>
      )}
    </ImageRoot>
  );
});

export default Image;
