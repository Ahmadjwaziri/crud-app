import React from "react";
import axios from "axios";

const ItemList = ({ items, refreshItems }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost/crud-app/backend/index.php?action=delete&id=${id}`);
      refreshItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}{" "}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
