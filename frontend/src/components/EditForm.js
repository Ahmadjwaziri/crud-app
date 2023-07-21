import React, { useState } from "react";
import axios from "axios";

const EditForm = ({ item, refreshItems }) => {
  const [name, setName] = useState(item.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      await axios.put(
        `http://localhost/crud-app/backend/index.php?action=update&id=${item.id}`,
        {
          name,
        }
      );
      refreshItems();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditForm;
