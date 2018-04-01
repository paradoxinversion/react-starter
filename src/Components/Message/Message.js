import React from "react";
import PropTypes from "prop-types";
import "./Message.css";

const Message = (props) => {
  return (
    <div className="message">
      <p> {props.message} </p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string
};
export default Message;