import { useState } from "react";
import data from "../data/accordianData";
import "../styles/accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enablemultipleSelect, setEnableMultipleSelect] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingleSelect(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultipleSelect(id) {
    const multipleItems = [...multiple];
    const findIndexOf = multipleItems.indexOf(id);
    console.log(findIndexOf);
    if (findIndexOf === -1) multipleItems.push(id);
    else multipleItems.splice(findIndexOf, 1);

    setmultiple(multipleItems);
  }
  console.log(selected, multiple);
  return (
    <div className=" wrapper">
      <h1> ACCORDIAN</h1>
      <button onClick={() => setEnableMultipleSelect(!enablemultipleSelect)}>
        {enablemultipleSelect
          ? "Enable single select "
          : "Enable multiple select"}
      </button>
      <div className="accordian">
        {data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div
              className="title"
              onClick={() =>
                enablemultipleSelect
                  ? handleMultipleSelect(dataItem.id)
                  : handleSingleSelect(dataItem.id)
              }
            >
              <h2>{dataItem.question}</h2>
              <span>+</span>
            </div>

            {enablemultipleSelect
              ? multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
              : selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )}
            {/* {selected === dataItem.id ||
            multiple.indexOf(dataItem.id) !== -1 ? (
              <div className="content">{dataItem.answer}</div>
            ) : null} */}
          </div>
        ))}
      </div>
      {enablemultipleSelect ? (
        <button onClick={() => setmultiple([])}> close all </button>
      ) : null}
    </div>
  );
}

export default Accordian;
