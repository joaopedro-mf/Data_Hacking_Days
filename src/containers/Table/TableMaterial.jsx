import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemTable, Button } from "../../components";
import { DataGrid } from "@material-ui/data-grid";

import "./Table.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Nome", width: 270 },
  { field: "age", headerName: "Age", type: "number", width: 90 }
];

const Table = ({ content, items, local }) => {
  const [result, setResult] = useState(content);
  console.log("content: ", content, "items:", items,"local:", local);

  function filterBy(listProducts, name) {
    return listProducts.filter((data) => {
      return data.nome.toLowerCase().includes(name.toLowerCase());
    });
  }

  function handleChangeInput(event) {
    const search = event.target.value;
    console.log(search);
    if (search !== "") {
      setResult(filterBy(content, search));
    } else {
      setResult(content);
    }
  }

  return (
    <div className="table" data-testid="table">
      <div className="table__options">
        <input
          className="table__search"
          type="text"
          placeholder="Procurar ..."
          onChange={handleChangeInput}
        />
        <Link to={`${local}/new`}>
          <Button title={"Novo"} type={"new"} size={"medium"} />
        </Link>
      </div>

      <div className="table__header">
        <div className="table__header-ID"> {items[0]}</div>
        <div className="table__header-NAME"> {items[1]}</div>
        <div className="table__header-DESCR"> {items[2]}</div>
      </div>
      <div className="table__content">
        {result.map((item) => (
          <ItemTable
            id={item.id}
            descr={item.idade}
            name={item.nome}
            local={local}
            element={item}
          />
        ))}
      </div>
      <div className="table__header">
        <div className="table__header-ID"> {items[0]}</div>
        <div className="table__header-NAME"> {items[1]}</div>
        <div className="table__header-DESCR"> {items[2]}</div>
      </div>
    </div>
  );
};

export default Table;
