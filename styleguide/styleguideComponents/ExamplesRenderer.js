import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const styles = () => ({
	// Just default jss-isolate rules
	root: {},
});

export const ExamplesRenderer = ({
	classes,
	name,
	children,
}) => {

  
  
	return (
		<article className={classes.root} data-testid={`${name}-examples`}>
			{
        React.Children.toArray(children).map((child, index)=>{  
          if(child.type.name === 'Markdown'){
            return (
              <div className="card" key={child.key + index}> {child} </div>
            )
          }
          return child;
        })
      }
		</article>
	);
};

ExamplesRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	name: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(ExamplesRenderer);