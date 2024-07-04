import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import { TextField } from "@mui/material";

function EditForm({ id, task, completed, editTodo, toggleIsEditing }) {
  const [inval, handleChange, reset] = useForm(task);

  function handleSubmit() {
    editTodo(id, inval);
    toggleIsEditing();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          variant="standard"
          fullWidth
          label="add Todo"
          value={inval}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default EditForm;
