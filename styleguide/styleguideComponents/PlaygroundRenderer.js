import React from 'react';
import MarkdownHeading from 'rsg-components/Markdown/MarkdownHeading';
import { Flex } from '@wonder-ui/core';

const FlexItem = Flex.Item;

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
      <FlexItem style={{marginRight: 20}}>
        <Flex align="start">
          <FlexItem>
            <MarkdownHeading level={4}>代码演示</MarkdownHeading>
          </FlexItem>
          <div>{toolbar}</div>
        </Flex>
        <div className="code-wrapper">{tabBody}</div>
			</FlexItem>
			<div {...previewProps} data-preview={name} data-testid="preview-wrapper">
				{preview}
			</div>
		</Flex>
  )
}