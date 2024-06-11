import React, { useState } from "react"
import ShoppingList from "./ShoppingList"
import itemData from "../data/items"
import Header from "./Header"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const appClass = darkMode ? "App dark" : "App light"
  const onDarkModeClick = () => setDarkMode(!darkMode)

  return (
    <div className={appClass}>
      <Header onDarkModeClick={onDarkModeClick} darkMode={darkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App
