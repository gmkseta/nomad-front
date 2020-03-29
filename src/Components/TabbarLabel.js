import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Span = styled.span`
`;

const TabbarLabel = ({ text, className=''}) => {
  className+=" tabbar-label";
  return (<Span className={className}>{text}</Span>);
}

TabbarLabel.propTypes = {
  text: PropTypes.string.isRequired
};

export default TabbarLabel;
