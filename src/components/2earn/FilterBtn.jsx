import React, { useState, useEffect } from "react";

const FilterBtn = ({ menuItems }) => {
  const [check, setCheck] = useState();

  // Set the initial state to the first menu item when component mounts
  useEffect(() => {
    if (menuItems.length > 0) {
      setCheck(menuItems[0]);
    }
  }, [menuItems]);

  const handle = (Val) => {
    setCheck(Val);
  };

  return (
    <div className="filter-btn-wrapper">
      {menuItems?.map((Val, id) => {
        return (
          <button
            className={check === Val ? "active" : "de-active"}
            onClick={() => handle(Val)}
            key={id}
          >
            {Val}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBtn;
