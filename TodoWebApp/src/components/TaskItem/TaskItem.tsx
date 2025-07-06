import type { Task } from "./TaskType";
import { Typography, Paper, Checkbox, Box } from "@mui/material";

type Props = {
  task: Task;
  toggleTaskCompletion: (t: Task) => void;
};

function TaskItem({ task, toggleTaskCompletion }: Props) {
  return (
    <Paper
      variant="outlined"
      elevation={22}
      sx={{ p: 1, borderRadius: "16px", display: "flex", flexDirection: "row" }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        variant="h6"
      >
        {task.name}
      </Typography>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Checkbox
        checked={task.completed}
        onChange={(_) => toggleTaskCompletion(task)}
      ></Checkbox>
    </Paper>
  );
}

export default TaskItem;
