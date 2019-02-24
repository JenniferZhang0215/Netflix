import React from "react";
import PropTypes from "prop-types";

const BottomList = props => {
  return (
    <div className="clear-float titleColor padding">
      {/* render my list */}
      <h3>My List:</h3>
      <ul className="list">
        {props.dataProperty.map(item => (
          <li className="bottomList" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

BottomList.propTypes = {
  dataProperty: PropTypes.array.isRequired
};

export default BottomList;
