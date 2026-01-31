import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/actions";
import { useState } from "react";

function Task({ task }) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(task.description);

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />

      <input value={editText} onChange={(e) => setEditText(e.target.value)} />

      <button onClick={() => dispatch(editTask(task.id, editText))}>
        Edit
      </button>
    </div>
  );
}

export default Task;
