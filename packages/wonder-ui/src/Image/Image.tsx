import * as React from 'react';
import ImageIcon from '../icons/Image';
import ImageX from '../icons/ImageX';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { addUnit, composeClasses, css, unitToPx } from '@wonder-ui/utils';
import { COMPONENT_NAME } from './ImageClasses';
import {
  useCreation,
  useForkRef,
  useInViewport,
  useUpdateEffect
} from '@wonder-ui/hooks';
import type { ImageProps } from './ImageTypes';

const useClasses = (styleProps: ImageProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    img: ['img'],
    placeholder: ['placeholder'],
    fallback: ['fallback']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ImageRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  display: 'inline-block',
  overflow: 'hidden',
  width: 'var(--image-width, auto)',
  height: 'var(--image-height, auto)',
  borderRadius: 'var(--image-radius, 0px)'
});

const ImageImg = styled('img', {
  name: COMPONENT_NAME,
  slot: 'Img'
})({
  width: '100%',
  height: '100%',
  display: 'block'
});

const ImagePlaceholder = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Placeholder'
})(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const ImageFallback = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Fallback'
})(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const Image = React.forwardRef<HTMLImageElement, ImageProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    width: widthProp,
    height: heightProp,
    radius: radiusProp,
    alt,
    className,
    fit = 'fill',
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
    placeholder = <ImageIcon fontSize="medium" />,
    fallback = <ImageX fontSize="medium" />,
    onClick,
    onLoad,
    onError
  } = props;

  const width = useCreation(
    () => (widthProp ? addUnit(unitToPx(widthProp)) : widthProp),
    [widthProp]
  );
  const height = useCreation(
    () => (heightProp ? addUnit(unitToPx(heightProp)) : heightProp),
    [heightProp]
  );
  const radius = useCreation(
    () => (radiusProp ? unitToPx(radiusProp) : radiusProp),
    [radiusProp]
  );
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [initialized, setInitialized] = React.useState(!lazy);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);
  const inViewport = useInViewport(rootRef);

  React.useEffect(() => {
    if (inViewport) {
      setInitialized(true);
    }
  }, [inViewport]);

  useUpdateEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setFailed(true);
    onError?.(e);
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    onLoad?.(e);
  };

  const classes = useClasses(props);

  return (
    <ImageRoot
      className={css(classes.root, className)}
      style={
        {
          '--image-width': width,
          '--image-height': height,
          '--image-radius': radius,
          ...style
        } as React.CSSProperties
      }
      ref={handleRef}
      onClick={onClick}
    >
      {failed ? (
        <ImageFallback className={classes.fallback}>{fallback}</ImageFallback>
      ) : (
        <React.Fragment>
          {!loaded && (
            <ImagePlaceholder className={classes.placeholder}>
              {placeholder}
            </ImagePlaceholder>
          )}
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
            style={{ objectFit: fit, display: loaded ? 'block' : 'none' }}
            className={classes.img}
          />
        </React.Fragment>
      )}
    </ImageRoot>
  );
});

export default Image;
