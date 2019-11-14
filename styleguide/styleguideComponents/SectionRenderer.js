import React from 'react';
import SectionHeading from 'rsg-components/SectionHeading';
import Markdown from 'rsg-components/Markdown';

/**
 * 
 * Section 块
 */
export default function SectionRenderer(props) {
	const {
		classes,
		name,
		slug,
		content,
		components,
		sections,
		depth,
		description,
		pagePerSection,
	} = props;
  
	return (
		<section data-testid={`section-${slug}`}>
			{name && depth > 1 && (
				<SectionHeading
					depth={depth}
					id={slug}
					slotName="sectionToolbar"
					pagePerSection={pagePerSection}
					slotProps={props}
				>
					{name}
				</SectionHeading>
			)}
			{description && <Markdown text={description} /> }
			{content}
			{sections}
			{components}
		</section>
	);
}