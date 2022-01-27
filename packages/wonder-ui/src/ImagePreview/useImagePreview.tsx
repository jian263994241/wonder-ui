import * as React from 'react';
import ImagePreview from './ImagePreview';
import type { ImagePreviewProps } from './ImagePreviewTypes';

export default function useImagePreview(
  props: Omit<ImagePreviewProps, 'visible'> = {}
) {
  const [visible, setVisible] = React.useState(false);
  const propsRef = React.useRef<any>();

  const rendered = (
    <ImagePreview
      onClose={() => hide()}
      {...props}
      {...propsRef.current}
      visible={visible}
    />
  );

  const show = (props?: Omit<ImagePreviewProps, 'visible'>) => {
    if (props) {
      propsRef.current = props;
    }

    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return { rendered, show, hide };
}
