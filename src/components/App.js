import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const appClass = darkMode ? "App dark" : "App light"

  const handleChangeMode = () => setDarkMode(!darkMode)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleChangeMode}>{darkMode === true ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
