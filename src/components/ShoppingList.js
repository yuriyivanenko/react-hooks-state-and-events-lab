import React, { act, useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [cart, setCart] = useState(items)

  const updateCart = (e) => {
    const action = e.target.innerHTML
    console.log('Func ran', e.target.innerHTML)
    if(action === 'Add to Cart'){
      addToCart(e)
    } else {
      removeFromCart(e)
    }
  }

  const addToCart = (e) => {
    const itemName = e.target.parentElement.childNodes[0].textContent
    const updatedCart = cart.map(item => {
      if(item.name === itemName){
        return {
          ...item,
        cartClass: "in-cart"
        }
      } else {
        return item
      }
    })
    setCart(updatedCart)
  }

  const removeFromCart = (e) => {
    const itemName = e.target.parentElement.childNodes[0].textContent
    const updatedCart = cart.map(item => {
      if(item.name === itemName){
        return {
          ...item,
        cartClass: ""
        }
      } else {
        return item
      }
    })
    setCart(updatedCart)
  }

  const handleFilter = (e) => {
    const category = e.target.value
    const filteredItems = items.filter(item => item.category === category)
    setCart(filteredItems)
  }  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {cart.map((item) => (
          <Item 
            cartClass={item.cartClass} 
            key={item.id} 
            name={item.name} 
            category={item.category} 
            addItemFun={updateCart} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
