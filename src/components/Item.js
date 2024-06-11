import React from "react";

function Item({ name, category, addItemFun, cartClass = "" }) {
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemFun}>{cartClass === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  )
}

export default Item;
