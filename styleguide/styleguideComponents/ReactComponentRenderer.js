import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'rsg-components/Pathline';
import Styled from 'rsg-components/Styled';
import Heading from 'rsg-components/Heading';

const styles = ({ color, fontSize, space }) => ({
	root: {
		marginBottom: space[6],
	},
	header: {
		marginBottom: space[3],
	},
	tabs: {
		marginBottom: space[3],
	},
	tabButtons: {
		marginBottom: space[1],
	},
	tabBody: {
		overflowX: 'auto',
		maxWidth: '100%',
		WebkitOverflowScrolling: 'touch',
	},
	docs: {
		color: color.base,
		fontSize: fontSize.text,
	},
});

export function ReactComponentRenderer({
	classes,
	name,
	heading,
	pathLine,
	description,
	docs,
	examples,
	tabButtons,
	tabBody,
}) {

	return (
		<div className={classes.root} data-testid={`${name}-container`}>
			<header className={classes.header}>
				{heading}
				{pathLine && (
          <div className="card">
            <Heading level={5}>引入</Heading>
            <Pathline>{pathLine}</Pathline>
          </div>
        )}
			</header>
			{(description || docs) && (
				<div className={classes.docs}>
          <Heading level={5}>介绍</Heading>
					{description}
					{docs}
				</div>
			)}
      {examples}
      
			{tabButtons && (
				<div className="card">
          <div className={classes.tabs}>
            {/* {tabButtons} */}
            <Heading level={5}>API</Heading>
          </div>
          
					<div className={classes.tabBody}>{tabBody}</div>
				</div>
			)}
			
		</div>
	);
}

ReactComponentRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	heading: PropTypes.node.isRequired,
	filepath: PropTypes.string,
	pathLine: PropTypes.string,
	tabButtons: PropTypes.node,
	tabBody: PropTypes.node,
	description: PropTypes.node,
	docs: PropTypes.node,
	examples: PropTypes.node,
	isolated: PropTypes.bool,
};

export default Styled(styles)(ReactComponentRenderer);