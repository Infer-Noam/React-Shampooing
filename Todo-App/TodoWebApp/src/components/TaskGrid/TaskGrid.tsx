import Grid from "@mui/material/Grid";
import type { Task } from '../TaskItem/TaskType'
import TaskItem from '../TaskItem/TaskItem'

type Props = {
  tasks: Task[];
};



function TaskGrid({tasks}: Props) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 8 }}>
      {
        tasks.map(t => {
          return (
            <TaskItem key = {t.id} task={t}/>
          )
        })
      }
       </Grid>
    </Grid>
  );
}
export default TaskGrid;
