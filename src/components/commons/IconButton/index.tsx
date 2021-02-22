import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import IconButtonStyle from './styles';

type IconButtonType = {
  children: ReactNode;
  onClick?: Function;
}

const IconButton: React.FC<IconButtonType> = ({
  children,
  onClick
}) => {
  return(
    <IconButtonStyle.Container onClick={() => onClick && onClick()}>
      {children}
    </IconButtonStyle.Container>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IconButton;
