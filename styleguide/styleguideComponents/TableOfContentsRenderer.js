import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const styles = ({ space, color, fontFamily, fontSize, borderRadius }) => ({
	root: {
		fontFamily: fontFamily.base,
	},
	search: {
		padding: space[2],
	},
	input: {
		display: 'block',
		width: '100%',
		padding: space[1],
		color: color.base,
		backgroundColor: '#f5f5f5',
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		border: [[1, color.border, 'solid']],
		borderRadius,
		transition: 'all ease-in-out .3s',
		'&:focus': {
			isolate: false,
      outline: 0,
      backgroundColor: '#eee',
		},
		'&::placeholder': {
			isolate: false,
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: color.light,
		},
	},
});



export const TableOfContentsRenderer = ({
	classes,
	children,
	searchTerm,
	onSearchTermChange,
}) => {
	return (
		<div>
			<div className={classes.root}>
				<nav>
					<div className={classes.search}>
						<input
							value={searchTerm}
							className={classes.input}
							placeholder="搜索组件"
							aria-label="Filter by name"
							onChange={event => onSearchTermChange(event.target.value)}
						/>
					</div>
					{children}
				</nav>
			</div>
		</div>
	);
};

TableOfContentsRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.node,
	searchTerm: PropTypes.string.isRequired,
	onSearchTermChange: PropTypes.func.isRequired,
};

export default Styled(styles)(TableOfContentsRenderer);