import Grid from "@mui/material/Grid";
import type { Task } from "../TaskItem/TaskType";
import TaskItem from "../TaskItem/TaskItem";

type Props = {
  tasks: Task[];
  toggleTaskCompletion: (t: Task) => void;
  openTaskMenu: (t: Task, e: React.MouseEvent<HTMLElement>) => void;
};

function TaskGrid({ tasks, toggleTaskCompletion, openTaskMenu }: Props) {
  const handleRightClick = (e: React.MouseEvent<HTMLElement>, t: Task) => {
    e.preventDefault();
    openTaskMenu(t, e);
  };

  return (
    <Grid
      container
      rowSpacing={2.5}
      columnSpacing={3.5}
      sx={{
        justifyContent: "center",
      }}
    >
      {tasks.map((t) => {
        return (
          <Grid
            size={{ xs: 1, md: 5 }}
            key={t.id}
            onContextMenu={(e) => handleRightClick(e, t)}
          >
            <TaskItem task={t} toggleTaskCompletion={toggleTaskCompletion} />
          </Grid>
        );
      })}
    </Grid>
  );
}
export default TaskGrid;
