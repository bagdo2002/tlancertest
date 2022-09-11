import React, { useEffect, useState } from "react";
import "./news.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateTable from "./CreateTable";
const NewsTable = () => {
  const [open, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [ident, setIdent] = useState();

  const [data, setData] = useState([]);

  const handleEdit = (id) => {
    setIsOpen(true);
    setEdit(true);
    setIdent(id);
  };
  console.log(data);
  const array = [
    { key: "name", value: "name" },
    { key: "lastName", value: "lastName" },
    { key: "email", value: "email" },
    { key: "operation", value: "operations" },
  ];

  const getFiles = (files) => {
    let returnFiles = [];

    for (let i = 0; i < files.length; i++) {
      returnFiles.push(files[i]?.filename);
    }

    return returnFiles;
  };
  const handleDelete = (ident) => {
    if (window.confirm("ნამდვილად გსურთ წაშლა?")) {
      const finish = data.filter((el, idx) => el.id !== ident);
      setData(finish);
    } else {
      return;
    }
  };
  const create = () => {
    setIsOpen(true);
  };
  return (
    <div className="newsTable">
      <div>
        {!open && (
          <div className="create">
            <button onClick={create}>შექმნა</button>
          </div>
        )}
      </div>

      {open ? (
        <CreateTable
          data={data}
          setData={setData}
          set={setIdent}
          edit={edit}
          setEdit={setEdit}
          open={open}
          setIsOpen={setIsOpen}
          id={ident}
        />
      ) : (
        <table>
          <thead>
            <tr>
              {array.map((el) => {
                return (
                  <th key={el?.key}>
                    <div>{el?.value}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <tr key={item?.id}>
                  <td>{item?.name}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.email}</td>

                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <div className="oper">
                      <EditIcon onClick={() => handleEdit(item?.id)} />
                      <DeleteIcon
                        onClick={() => {
                          return handleDelete(item?.id);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NewsTable;
