import { useState } from "react";

function ToDo() {
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim()) setItem([...item, inputValue]);
    setInputValue("");
  }
  function handleDelete(index) {
    setItem(item.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1> Todo List</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your items"
      />
      <button onClick={handleAdd}> Add Items</button>

      <div>
        {item.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
