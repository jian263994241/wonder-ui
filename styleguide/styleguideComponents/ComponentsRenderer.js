import React from 'react';
import PropTypes from 'prop-types';

export default function ComponentsRenderer({ children }) {
	return <div className="component">{children}</div>;
}

ComponentsRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};