import React from 'react';
import PropTypes from 'prop-types';

type IconType = {
  color?: string;
}

const EmailIcon: React.FC<IconType> = ({
  color,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill={`${color}`} viewBox="0 0 24 24">
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
  </svg>
);

EmailIcon.propTypes = {
  color: PropTypes.string,
};

EmailIcon.defaultProps = {
  color: 'black',
};

export default EmailIcon;
