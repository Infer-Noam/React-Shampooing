import type { Task } from './TaskType'
import {Typography} from '@mui/material'

type Props = {
  task: Task;
};


function TaskItem({task}: Props) {
    return (
        <Typography variant="h2">{task.name}</Typography>
    )
}

export default TaskItem


