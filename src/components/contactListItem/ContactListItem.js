import React from "react";
import PropTypes from "prop-types";
import css from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, removeItem, id }) => {
  const onHandleClick = () => {
    removeItem(id);
  };

  return (
    <li className={css.item}>
      <span>{name}</span> : <span>{number}</span>
      <button className={css.button} onClick={onHandleClick}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
