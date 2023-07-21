import React, { useEffect, useState } from "react";
import axios from "axios";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import ItemList from "./components/ItemList";

const App = () => {
  const [items, setItems] = useState([]);

  const refreshItems = async () => {
    try {
      const response = await axios.get("http://localhost/crud-app/backend/index.php?action=read");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    refreshItems();
  }, []);

  return (
    <div>
      <h1>CRUD App</h1>
      <AddForm refreshItems={refreshItems} />
      <ItemList items={items} refreshItems={refreshItems} />
      {items.map((item) => (
        <EditForm key={item.id} item={item} refreshItems={refreshItems} />
      ))}
    </div>
  );
};

export default App;
