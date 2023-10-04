import { addTodo } from "@/api";
import Link from "next/link";

const AddTodo = () => {
  return (
    <div>
      <form action={addTodo} className="flex gap-2 items-center">
        <input
          type="text"
          name="title"
          className="bg-slate-700 border rounded-md w-auto outline-none px-3 py-1 my-2"
        />
        <button type="submit" className="btn outline-none">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
