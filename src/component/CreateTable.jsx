import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import "./news.css";
import InputBase from "@mui/material/InputBase";
const CreateTable = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  let random = Math.floor(Math.random() * 1000);

  useEffect(() => {
    console.log(props.id);
    if (props.edit) {
      props.data.map((el, index) => {
        if (el.id == props.id) {
          setName(el.name);
          setLastName(el.lastName);
          setEmail(el.email);
        }
      });
    }
  }, [props.open]);
  const object = {
    id: `${props.id ? props.id : random}`,
    lastName: lastName,
    name: name,
    email: email,
  };

  const handleChange = (e) => {
    e.preventDefault();

    let copy = props.data;
    let index = null;
    if (props.id) {
      let over = props.data.map((el, idx) => {
        if (el.id == props.id) {
          return (index = idx);
        }
      });
      copy.splice(index, 1, object);

      props.setData([...copy]);

      props.set("");
      setTimeout(() => {
        props.setIsOpen(false);
      }, 200);
    } else {
      props.setData([...props.data, object]);
    }

    props.set("");
    setTimeout(() => {
      props.setIsOpen(false);
    }, 200);
  };

  const handleClose = () => {
    props.setEdit(false);
    props.setIsOpen(false);
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "6px 26px 6px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  }));

  return (
    <div className="createTableWrapper">
      <form className="tableformWrapper" onSubmit={handleChange}>
        <div className="title">
          <label className="tableLabel" htmlFor="">
            სახელი
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>{" "}
        <div className="title">
          <label className="tableLabel" htmlFor="">
            გვარი
          </label>
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
        </div>{" "}
        <div className="title">
          <label className="tableLabel" htmlFor="">
            იმეილი
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="lastLineBtn">
          <button className="save" type="submit">
            შენახვა
          </button>
          <button className="close1" onClick={handleClose}>
            დახურვა
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTable;
