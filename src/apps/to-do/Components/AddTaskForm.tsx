import { useState } from "react";
import toast from "react-hot-toast";

type AddTaskFormProps = {
  onAdd: (taskTitle: string, important: boolean, urgent: boolean) => void;
};

function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [important, setImportant] = useState(false);
  const [urgent, setUrgent] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row gap-2 lg:gap-10">
      <div className="flex gap-5 justify-start items-center">
        <label className="label">
          <input
            type="checkbox"
            checked={urgent}
            onChange={(e) => setUrgent(e.target.checked)}
            className="checkbox checkbox-warning"
          />
          فوری
        </label>
        <label className="label">
          <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
            className="checkbox checkbox-accent"
          />
          مهم
        </label>
      </div>
      <form
        className="join w-full"
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length <= 0) {
            toast.error("عنوان کار نباید خالی باشد!");
            return;
          }
          onAdd(title, important, urgent);
          toast.success("کار به لیست اضافه شد!");
        }}
      >
        <input
          className="input join-item"
          placeholder="کاری اضافه کنید . . ."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary join-item">
          اضافه کردن
        </button>
      </form>
    </section>
  );
}

export default AddTaskForm;
