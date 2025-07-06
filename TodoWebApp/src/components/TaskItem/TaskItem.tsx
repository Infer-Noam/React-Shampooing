import type { Task } from "./TaskType";
import { Typography, Paper, Checkbox, Box } from "@mui/material";
import Styles from "./TaskItem.style"

type Props = {
  task: Task;
  toggleTaskCompletion: (t: Task) => void;
};

function TaskItem({ task, toggleTaskCompletion }: Props) {
  return (
    <Paper
      variant="outlined"
      elevation={22}
      sx={Styles.paper}
    >
      <Typography
        sx={Styles.typography}
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
