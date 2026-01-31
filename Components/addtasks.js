import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
