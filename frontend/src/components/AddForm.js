import React, { useState } from "react";
import axios from "axios";

const AddForm = ({ refreshItems }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      await axios.post("http://localhost/crud-app/backend/index.php?action=create", {
        name,
      });
      setName("");
      refreshItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddForm;
