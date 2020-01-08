
import React from 'react';
import { Page, Typography, ContentBlock } from '@wonder-ui/core';

export default function TypographyExamples() {

  return (
    <Page
      name="Typography"
      navbar
    >
      <ContentBlock header="Title">
        <Typography type="h1" component="h1"> Type H1 </Typography>
        <Typography type="h2" component="h2"> Type H2 </Typography>
        <Typography type="h3" component="h3"> Type H3 </Typography>
        <Typography type="h4" component="h4"> Type H4 </Typography>
        <Typography type="h5" component="h5"> Type H5 </Typography>
        <Typography type="h6" component="h6"> Type H6 </Typography>
      </ContentBlock>
      <ContentBlock header="SubTitle">
        <Typography type="subtitle1"> Type Subtitle1 </Typography>
        <Typography type="subtitle2"> Type Subtitle2 </Typography>
      </ContentBlock>
      <ContentBlock header="Other">
        <Typography> Type default </Typography>
        <Typography type="caption"> Type caption </Typography>
        <Typography type="default" inline> Type default inline, </Typography>
        <Typography type="caption" inline> Type caption inline</Typography>
      </ContentBlock>
      <ContentBlock header="Color">
        <Typography color="primary"> Color primary, </Typography>
        <Typography color="secondary"> Color secondary, </Typography>
        <Typography color="error"> Color error, </Typography>
        <Typography color="info"> Color info, </Typography>
        <Typography color="warning"> Color warning, </Typography>
        <Typography color="success"> Color success, </Typography>
      </ContentBlock>
    </Page>
  )
}