import { useState } from "react";
import TaskGrid from "./components/TaskGrid/TaskGrid";
import { Fab, Box } from "@mui/material";
import taskArrayData from "./data/TaskArrayData";
import AddIcon from "@mui/icons-material/Add";
import AddTaskDialog from "./components/Dialog/AddTaskDialog";
import TaskMenu from "./components/TaskMenu/TaskMenu";
import type { Task } from "./components/TaskItem/TaskType";
import Styles from "./App.style";

function App() {
  const [tasks, setTasks] = useState(taskArrayData);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Box sx={Styles.appContainer}>
      <Box sx={Styles.gridContainer}>
        <TaskGrid
          tasks={tasks}
          toggleTaskCompletion={(t) =>
            setTasks((prevTasks) =>
              prevTasks.map((prevTask) =>
                prevTask.id === t.id
                  ? { ...t, completed: !t.completed }
                  : prevTask
              )
            )
          }
          openTaskMenu={(t, e) => {
            setAnchorEl(e.currentTarget);
            return setSelectedTask(t);
          }}
        />
      </Box>
      <Fab
        sx={Styles.fab}
        color="primary"
        aria-label="add"
        onClick={() => {
          setIsAddDialogOpen((_) => true);
        }}
      >
        <AddIcon />
      </Fab>

      {isAddDialogOpen && (
        <AddTaskDialog
          isOpen={isAddDialogOpen}
          closeDialog={() => setIsAddDialogOpen(false)}
          createTask={(t) => setTasks((prevTasks) => [...prevTasks, t])}
        />
      )}

      {selectedTask && (
        <TaskMenu
          anchorEl={anchorEl}
          open={selectedTask !== null}
          onClose={() => {
            setAnchorEl(null);
            return setSelectedTask(null);
          }}
          deleteTask={() =>
            setTasks((prevTasks) => {
              setAnchorEl(null);
              setSelectedTask(null);
              return prevTasks.filter(
                (prevTask) => selectedTask.id !== prevTask.id
              );
            })
          }
          copyTask={() => {
            navigator.clipboard.writeText(selectedTask.name);
            setSelectedTask(null);
            setAnchorEl(null);
          }}
        />
      )}
    </Box>
  );
}

export default App;
