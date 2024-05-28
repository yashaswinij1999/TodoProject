import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "../Hooks/useTodoState";

function TodoApp() {
  const initialData = [
    { id: 1, task: "buy milk", completed: true },
    { id: 2, task: "sleep well", completed: false },
  ];
  const { data, addTodo, deleteTodo, toggleTodo, editTodo } =
    useTodoState(initialData);

  return (
    <>
      <Paper
        style={{
          height: "100vh",
          padding: 0,
          margin: 0,
          backgroundColor: "#fafafa",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color={"inherit"}>TodoList</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent={"center"} marginTop={"1rem"}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              data={data}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleTodo={toggleTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default TodoApp;
