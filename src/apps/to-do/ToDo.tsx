import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import AddTaskForm from "./Components/AddTaskForm";
import FilterTask from "./Components/FilterTask";
import Task from "./Components/Task";

type TaskType = {
  id: number;
  title: string;
  important: boolean;
  urgent: boolean;
  check: boolean;
};

function ToDo() {
  const [justImportant, setJustImportant] = useState(false);
  const [justUrgent, setJustUrgent] = useState(false);
  const [tasks, setTasks] = useState<Array<Task>>(() => {
    const storedTasks = localStorage.getItem("tasks");

    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const sortTasks = (tasks: TaskType[]): TaskType[] => {
    return [...tasks].sort((a, b) => {
      const priority = (task: Task) => {
        if (task.important && task.urgent) return 0;
        if (task.urgent) return 1;
        if (task.important) return 2;
        return 3;
      };

      return priority(a) - priority(b);
    });
  };

  function addTask(
    taskTitle: string,
    important: boolean,
    urgent: boolean,
  ): void {
    setTasks(
      sortTasks([
        ...tasks,
        {
          id:
            tasks.length === 0
              ? 1
              : Math.max(...tasks.map((task) => task.id)) + 1,
          title: taskTitle,
          important: important,
          urgent: urgent,
          check: false,
        },
      ]),
    );
  }

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) =>
      sortTasks(prevTasks.filter((task) => task.id !== taskId)),
    );
    toast.success("با موفقیت حذف شد.");
  };

  function checkTask(taskId: number): void {
    setTasks((prevTasks) =>
      sortTasks(
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, check: !task.check } : task,
        ),
      ),
    );
  }

  return (
    <main className="container mx-auto p-8">
      <div className="card bg-base-100 w-full h-[90vh] shadow-sm mx-auto">
        <div className="card-body flex flex-col min-h-0">
          <AddTaskForm onAdd={addTask} />

          <div className="divider h-0 shrink-0"></div>

          <FilterTask
            onImportantFilter={setJustImportant}
            onUrgentFilter={setJustUrgent}
          />

          {/* Task area */}
          <div className="flex-1 h-full overflow-y-hidden">
            <Task
              tasks={tasks}
              onDelete={removeTask}
              onCheck={checkTask}
              justImportant={justImportant}
              justUrgent={justUrgent}
            />
          </div>
        </div>
      </div>

      <Toaster />
    </main>
  );
}

export default ToDo;
