import { HiOutlineTrash } from "react-icons/hi2";
import { BsLightning, BsExclamationCircle } from "react-icons/bs";

type Task = {
  id: number;
  title: string;
  important: boolean;
  urgent: boolean;
  check: boolean;
};

type TaskProps = {
  tasks: Array<Task>;
  onDelete: (taskId: number) => void;
  onCheck: (taskId: number) => void;
  justImportant: boolean;
  justUrgent: boolean;
};

function Task({ tasks, onDelete, onCheck, justImportant, justUrgent }: TaskProps) {
  return (
    <ul className="list rounded-box my-3 h-full overflow-y-auto">
      {tasks
        .filter(
          (task) =>
            (justImportant && task.important) ||
            (justUrgent && task.urgent) ||
            (!justUrgent && !justImportant),
        )
        .map((task: Task) => (
          <li key={task.id} className={`list-row ${task.check && "opacity-40"}`}>
            <div className="my-auto">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                onChange={() => onCheck(task.id)}
                checked={task.check}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="relative">{task.check && <div className="absolute w-full h-px top-[50%] bg-primary"></div>}{task.title}</div>
              {(task.important || task.urgent) && (
                <>
                  <div className="text-xs uppercase font-semibold flex gap-2 pt-1">
                    {task.urgent && (
                      <div className="badge badge-sm bg-warning/10 text-warning gap-1">
                        <BsLightning className="text-warning" />
                        فوری
                      </div>
                    )}
                    {task.important && (
                      <div className="badge badge-sm bg-accent/10 text-accent gap-1">
                        <BsExclamationCircle className="text-accent" />
                        مهم
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
            <button
              className="btn btn-error btn-square btn-ghost"
              value={task.title}
              onClick={() => onDelete(task.id)}
            >
              <HiOutlineTrash className="size-6" />
            </button>
          </li>
        ))}
    </ul>
  );
}

export default Task;
