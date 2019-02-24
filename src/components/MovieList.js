import React from "react";
import { PropTypes } from "prop-types";

const MovieList = props => {
  const { dataProperty, nameProperty, actionProperty, buttonProperty } = props;
  return (
    <div className="clear-float">
      {/* array name */}
      <span id={dataProperty.length === 0 ? "list-span" : null}>
        <h4 className="titleColor padding">{nameProperty}</h4>
      </span>
      {/* movie list*/}
      <ul className="list">
        {dataProperty.map((item, index) => (
          <li className="li" key={item.id}>
            <img className="img" alt={item.title} src={item.img} />
            <div className="hidden">
              <span className="titleColor padding">{item.title}</span>
              <button onClick={() => actionProperty(index)}>
                {buttonProperty}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  dataProperty: PropTypes.array.isRequired,
  nameProperty: PropTypes.string.isRequired,
  buttonProperty: PropTypes.string.isRequired
};

export default MovieList;
