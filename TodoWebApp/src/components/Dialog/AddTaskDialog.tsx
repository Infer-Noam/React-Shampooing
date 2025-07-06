import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import type { Task } from "../TaskItem/TaskType";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import Styles from "./AddTaskDialog.style";

type Props = {
  isOpen: boolean;
  closeDialog: () => void;
  createTask: (t: Task) => void;
};

function AddTaskDialog({ isOpen, closeDialog, createTask }: Props) {
  const [text, setText] = useState("");

  const createNewTask = () => {
    const task: Task = {
      id: Date.now(),
      name: text,
      completed: false,
    };
    createTask(task);
    closeDialog();
  };
  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle>Add a new task!</DialogTitle>
      <DialogContent sx={Styles.dialogContent}>
        <TextField
          sx={Styles.textField}
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button variant="text" sx={Styles.button} onClick={createNewTask}>
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskDialog;
