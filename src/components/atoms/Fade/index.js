import React from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';

const Fade = (props) => {
  let { children, timeout, in: inProp } = props;

  let duration = typeof timeout === 'object' ? timeout.exit : timeout;

  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity'
  };

  const transitionStyles = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1
    },
    exiting: {
      opacity: 0
    }
  };

  return (
    <Transition {...props}>
      {
        (status) => {
          if (status === 'exited') {
            return null;
          }
          const currentStyles = transitionStyles[status];

          return React.cloneElement(children, {
            style: {
              ...defaultStyle,
              ...currentStyles
            }
          });
        }
      }
    </Transition>
  );
};

Fade.propTypes = {
  children: PropTypes.node,
  in: PropTypes.bool,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
};

export default Fade;
