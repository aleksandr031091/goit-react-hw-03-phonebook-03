import React from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ onChange, value }) => {
  const onHandleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onHandleChange}
        />
      </label>
    </>
  );
};

export default Filter;

Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
