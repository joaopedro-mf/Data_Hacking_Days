import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemTable, Button } from "../../components";
import { DataGrid } from "@material-ui/data-grid";

import "./Table.scss";

const fillRows = (content, headers) => {
  const rows = [];
  content.forEach((row) => {
    const obj = {};
    let key;
    for (let column in headers) {
      key = headers[column].field;
      obj[key] = row[key];
    }
    rows.push(obj);
  });

  return rows;
};

const fillHeader = (items) => {
  const headers = [];
  items.forEach((header) => {
    if (header.width) {
      headers.push({
        field: header.field,
        headerName: header.name,
        width: header.width,
      });
    } else {
      headers.push({ field: header, headerName: header });
    }
  });
  return headers;
};

const Table = ({ content, items, local }) => {
  const headers = [...fillHeader(items)];
  
  const fullRows = [...fillRows(content, items)];

  const [rows, setRows] = useState(() => {
    return fillRows(content, items);
  });


  function filterBy(listProducts, name) {
    return listProducts.filter((data) => {
      return data.nome.toLowerCase().includes(name.toLowerCase());
    });
  }

  function handleChangeInput(event) {
    const search = event.target.value;
    if (search !== "") {
      setRows(filterBy(fullRows, search));
    } else {
      setRows(fullRows);
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

      <div style={{ height: 400, width: 1200 }}>
        <DataGrid
          rows={rows}
          columns={headers}
          pageSize={15}
        />
      </div>
    </div>
  );
};

export default Table;
