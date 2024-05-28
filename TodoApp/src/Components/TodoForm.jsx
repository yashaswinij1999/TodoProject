import { Box, Paper, TextField } from "@mui/material";
import React, { useContext, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import useForm from "../Hooks/useForm";

function TodoForm({ addTodo }) {
  const [inval, handleChange, reset] = useForm("");

  const inRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inval);
    reset();
    inRef.current.focus();
  }

  return (
    <>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }} elevation={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="add Todo"
            value={inval}
            onChange={handleChange}
            ref={inRef}
          />
        </form>
      </Paper>
    </>
  );
}

export default TodoForm;
