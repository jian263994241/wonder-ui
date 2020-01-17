import React from 'react';
import MarkdownHeading from 'rsg-components/Markdown/MarkdownHeading';
import { Flex } from '@wonder-ui/core';

export default function PlaygroundRenderer(props){
  const {
    exampleIndex,
    name,
    padded,
    preview,
    previewProps,
    tabButtons,
    tabBody,
    toolbar,
  } = props;

  return (
    <Flex align="start" data-testid={`${name}-example-${exampleIndex}`} style={{height: 667, marginBottom: 20}}>
      <div style={{marginRight: 20, width: '99%'}}>
        <Flex align="start">
          <div>
            <MarkdownHeading level={4}>代码演示</MarkdownHeading>
          </div>
          {/* <div>{toolbar}</div> */}
        </Flex>
        <div className="code-wrapper">{tabBody}</div>
			</div>
			<div {...previewProps} data-preview={name} data-testid="preview-wrapper">
				{preview}
			</div>
		</Flex>
  )
}