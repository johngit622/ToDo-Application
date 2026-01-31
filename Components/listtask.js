import { useSelector, useDispatch } from "react-redux";
import Task from "./task";
import { setFilter } from "../redux/actions";

function ListTask() {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state);

  const filteredTasks =
    filter === "DONE"
      ? tasks.filter((t) => t.isDone)
      : filter === "NOT_DONE"
        ? tasks.filter((t) => !t.isDone)
        : tasks;

  return (
    <div>
      <button onClick={() => dispatch(setFilter("ALL"))}>All</button>
      <button onClick={() => dispatch(setFilter("DONE"))}>Done</button>
      <button onClick={() => dispatch(setFilter("NOT_DONE"))}>Not Done</button>

      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
