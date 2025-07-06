import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";
import { ContentCopy, Delete } from "@mui/icons-material";

type Props = {
  deleteTask: () => void;
  copyTask: () => void;
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
};

function TaskMenu({ copyTask, deleteTask, open, onClose, anchorEl }: Props) {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MenuItem onClick={copyTask}>
        <ListItemIcon>
          <ContentCopy fontSize="small" />
        </ListItemIcon>

        <ListItemText>Copy</ListItemText>
      </MenuItem>

      <MenuItem onClick={deleteTask}>
        <ListItemIcon>
          <Delete fontSize="small" />
        </ListItemIcon>

        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default TaskMenu;
